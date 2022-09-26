console.log("hello from hello.js");

const shoppingListTitle = document.getElementById("shopping-list-title");
if (shoppingListTitle) {
  shoppingListTitle.style.color = "blue";
  shoppingListTitle.style.fontSize = "14px";
  shoppingListTitle.innerHTML += " (v2)";
}
