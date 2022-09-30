import electron from "electron";
import { version } from "./utils";

console.log("app version", version);

const shoppingListTitle = document.getElementById("shopping-list-title");
if (shoppingListTitle) {
  shoppingListTitle.style.color = "blue";
  shoppingListTitle.style.fontSize = "14px";
  shoppingListTitle.innerHTML += " (v" + version + ")";
}

const { ipcRenderer } = electron;
const ul = document.querySelector("ul");

ipcRenderer.on("item:add", function (e, item) {
  if (ul) {
    ul.className = "collection";
    const li = document.createElement("li");
    li.className = "collection-item";
    const itemText = document.createTextNode(item);

    li.appendChild(itemText);
    ul.appendChild(li);
  }
});

ipcRenderer.on("item:clear", function () {
  if (ul) {
    ul.className = "";
    ul.innerHTML = "";
  }
});

ul?.addEventListener("dblclick", removeItem);

function removeItem(e) {
  event?.target?.remove();
  if (ul?.children.length == 0) {
    ul.className = "";
  }
}
