import packageJson from "../package.json";
const electron = require("electron");
const { ipcRenderer } = electron;

const version = packageJson.version;

console.log("addOn version: ", version);

document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const item = document.querySelector("#item").value;
  console.log(ipcRenderer);
  ipcRenderer.send("item:add", item);
}
