import electron from "electron";
import url from "url";
import axios from "axios";
import { getPagePath, version } from "./utils";
import { SERVER } from "../server/constants";
import electronStore from "./electronStore";

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on("ready", function () {
  const storedVersion = electronStore.get("v");
  console.log("stored version", storedVersion);

  axios.get(`${SERVER}/v`).then((res) => {
    const v = res.data.v || version;
    console.log("fetched version", v);

    if (v !== storedVersion) {
      electronStore.set("v", v);
      console.log("new stored version", electronStore.get("v"));
    }
    // Create new window
    mainWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    // Load html in window
    mainWindow.loadURL(
      url.format({
        // pathname: path.join(__dirname, "dist", version, "mainWindow.html"),
        // pathname: getPagePath("mainWindow.html"),
        pathname: getPagePath("mainWindow.html", v),
        protocol: "http:",
        slashes: true,
      })
    );
    mainWindow.webContents.openDevTools();

    // Quit app when closed
    mainWindow.on("closed", function () {
      app.quit();
    });

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
  });
});

// Handle add item window
function createAddWindow() {
  const v: string = (electronStore.get("v") as string) || version;
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Add Shopping List Item",

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  addWindow.loadURL(
    url.format({
      // pathname: path.join(__dirname, "dist", version, "addWindow.html"),
      pathname: getPagePath("addWindow.html", v),
      protocol: "http:",
      slashes: true,
    })
  );
  // Handle garbage collection
  addWindow.on("close", function () {
    addWindow = null;
  });
}

// Catch item:add
ipcMain.on("item:add", function (e, item) {
  mainWindow.webContents.send("item:add", item);
  addWindow.close();
  // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
  addWindow = null;
});

// Create menu template
const mainMenuTemplate = [
  // Each object is a dropdown
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        click() {
          createAddWindow();
        },
      },
      {
        label: "Clear Items",
        click() {
          mainWindow.webContents.send("item:clear");
        },
      },
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
];

// If OSX, add empty object to menu
// if (process.platform == "darwin") {
//   mainMenuTemplate.unshift({});
// }

// Add developer tools option if in dev
if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        role: "reload",
      },
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
}
