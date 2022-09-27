/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/electron.ts":
/*!*************************!*\
  !*** ./src/electron.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _electron = _interopRequireDefault(__webpack_require__(/*! electron */ \"electron\"));\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _url = _interopRequireDefault(__webpack_require__(/*! url */ \"url\"));\n\nvar _package = _interopRequireDefault(__webpack_require__(/*! ../package.json */ \"./package.json\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst version = _package.default.version;\nconst {\n  app,\n  BrowserWindow,\n  Menu,\n  ipcMain\n} = _electron.default;\nlet mainWindow;\nlet addWindow; // Listen for app to be ready\n\napp.on(\"ready\", function () {\n  // Create new window\n  mainWindow = new BrowserWindow({\n    webPreferences: {\n      nodeIntegration: true,\n      contextIsolation: false\n    }\n  }); // Load html in window\n\n  mainWindow.loadURL(_url.default.format({\n    pathname: _path.default.join(__dirname, \"dist\", version, \"mainWindow.html\"),\n    protocol: \"file:\",\n    slashes: true\n  })); // Quit app when closed\n\n  mainWindow.on(\"closed\", function () {\n    app.quit();\n  }); // Build menu from template\n\n  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate); // Insert menu\n\n  Menu.setApplicationMenu(mainMenu);\n}); // Handle add item window\n\nfunction createAddWindow() {\n  addWindow = new BrowserWindow({\n    width: 300,\n    height: 200,\n    title: \"Add Shopping List Item\",\n    webPreferences: {\n      nodeIntegration: true,\n      contextIsolation: false\n    }\n  });\n  addWindow.loadURL(_url.default.format({\n    pathname: _path.default.join(__dirname, \"dist\", version, \"addWindow.html\"),\n    protocol: \"file:\",\n    slashes: true\n  })); // Handle garbage collection\n\n  addWindow.on(\"close\", function () {\n    addWindow = null;\n  });\n} // Catch item:add\n\n\nipcMain.on(\"item:add\", function (e, item) {\n  mainWindow.webContents.send(\"item:add\", item);\n  addWindow.close(); // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)\n\n  addWindow = null;\n}); // Create menu template\n\nconst mainMenuTemplate = [// Each object is a dropdown\n{\n  label: \"File\",\n  submenu: [{\n    label: \"Add Item\",\n\n    click() {\n      createAddWindow();\n    }\n\n  }, {\n    label: \"Clear Items\",\n\n    click() {\n      mainWindow.webContents.send(\"item:clear\");\n    }\n\n  }, {\n    label: \"Quit\",\n    accelerator: process.platform == \"darwin\" ? \"Command+Q\" : \"Ctrl+Q\",\n\n    click() {\n      app.quit();\n    }\n\n  }]\n}]; // If OSX, add empty object to menu\n// if (process.platform == \"darwin\") {\n//   mainMenuTemplate.unshift({});\n// }\n// Add developer tools option if in dev\n\nif (true) {\n  mainMenuTemplate.push({\n    label: \"Developer Tools\",\n    submenu: [{\n      role: \"reload\"\n    }, {\n      label: \"Toggle DevTools\",\n      accelerator: process.platform == \"darwin\" ? \"Command+I\" : \"Ctrl+I\",\n\n      click(item, focusedWindow) {\n        focusedWindow.toggleDevTools();\n      }\n\n    }]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZWxlY3Ryb24udHMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmctbGlzdC8uL3NyYy9lbGVjdHJvbi50cz81NzJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2VsZWN0cm9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb25cIikpO1xuXG52YXIgX3BhdGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcblxudmFyIF91cmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ1cmxcIikpO1xuXG52YXIgX3BhY2thZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2ZXJzaW9uID0gX3BhY2thZ2UuZGVmYXVsdC52ZXJzaW9uO1xuY29uc3Qge1xuICBhcHAsXG4gIEJyb3dzZXJXaW5kb3csXG4gIE1lbnUsXG4gIGlwY01haW5cbn0gPSBfZWxlY3Ryb24uZGVmYXVsdDtcbmxldCBtYWluV2luZG93O1xubGV0IGFkZFdpbmRvdzsgLy8gTGlzdGVuIGZvciBhcHAgdG8gYmUgcmVhZHlcblxuYXBwLm9uKFwicmVhZHlcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBDcmVhdGUgbmV3IHdpbmRvd1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZVxuICAgIH1cbiAgfSk7IC8vIExvYWQgaHRtbCBpbiB3aW5kb3dcblxuICBtYWluV2luZG93LmxvYWRVUkwoX3VybC5kZWZhdWx0LmZvcm1hdCh7XG4gICAgcGF0aG5hbWU6IF9wYXRoLmRlZmF1bHQuam9pbihfX2Rpcm5hbWUsIFwiZGlzdFwiLCB2ZXJzaW9uLCBcIm1haW5XaW5kb3cuaHRtbFwiKSxcbiAgICBwcm90b2NvbDogXCJmaWxlOlwiLFxuICAgIHNsYXNoZXM6IHRydWVcbiAgfSkpOyAvLyBRdWl0IGFwcCB3aGVuIGNsb3NlZFxuXG4gIG1haW5XaW5kb3cub24oXCJjbG9zZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGFwcC5xdWl0KCk7XG4gIH0pOyAvLyBCdWlsZCBtZW51IGZyb20gdGVtcGxhdGVcblxuICBjb25zdCBtYWluTWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUobWFpbk1lbnVUZW1wbGF0ZSk7IC8vIEluc2VydCBtZW51XG5cbiAgTWVudS5zZXRBcHBsaWNhdGlvbk1lbnUobWFpbk1lbnUpO1xufSk7IC8vIEhhbmRsZSBhZGQgaXRlbSB3aW5kb3dcblxuZnVuY3Rpb24gY3JlYXRlQWRkV2luZG93KCkge1xuICBhZGRXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICB0aXRsZTogXCJBZGQgU2hvcHBpbmcgTGlzdCBJdGVtXCIsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlXG4gICAgfVxuICB9KTtcbiAgYWRkV2luZG93LmxvYWRVUkwoX3VybC5kZWZhdWx0LmZvcm1hdCh7XG4gICAgcGF0aG5hbWU6IF9wYXRoLmRlZmF1bHQuam9pbihfX2Rpcm5hbWUsIFwiZGlzdFwiLCB2ZXJzaW9uLCBcImFkZFdpbmRvdy5odG1sXCIpLFxuICAgIHByb3RvY29sOiBcImZpbGU6XCIsXG4gICAgc2xhc2hlczogdHJ1ZVxuICB9KSk7IC8vIEhhbmRsZSBnYXJiYWdlIGNvbGxlY3Rpb25cblxuICBhZGRXaW5kb3cub24oXCJjbG9zZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgYWRkV2luZG93ID0gbnVsbDtcbiAgfSk7XG59IC8vIENhdGNoIGl0ZW06YWRkXG5cblxuaXBjTWFpbi5vbihcIml0ZW06YWRkXCIsIGZ1bmN0aW9uIChlLCBpdGVtKSB7XG4gIG1haW5XaW5kb3cud2ViQ29udGVudHMuc2VuZChcIml0ZW06YWRkXCIsIGl0ZW0pO1xuICBhZGRXaW5kb3cuY2xvc2UoKTsgLy8gU3RpbGwgaGF2ZSBhIHJlZmVyZW5jZSB0byBhZGRXaW5kb3cgaW4gbWVtb3J5LiBOZWVkIHRvIHJlY2xhaW0gbWVtb3J5IChHcmFiYWdlIGNvbGxlY3Rpb24pXG5cbiAgYWRkV2luZG93ID0gbnVsbDtcbn0pOyAvLyBDcmVhdGUgbWVudSB0ZW1wbGF0ZVxuXG5jb25zdCBtYWluTWVudVRlbXBsYXRlID0gWy8vIEVhY2ggb2JqZWN0IGlzIGEgZHJvcGRvd25cbntcbiAgbGFiZWw6IFwiRmlsZVwiLFxuICBzdWJtZW51OiBbe1xuICAgIGxhYmVsOiBcIkFkZCBJdGVtXCIsXG5cbiAgICBjbGljaygpIHtcbiAgICAgIGNyZWF0ZUFkZFdpbmRvdygpO1xuICAgIH1cblxuICB9LCB7XG4gICAgbGFiZWw6IFwiQ2xlYXIgSXRlbXNcIixcblxuICAgIGNsaWNrKCkge1xuICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5zZW5kKFwiaXRlbTpjbGVhclwiKTtcbiAgICB9XG5cbiAgfSwge1xuICAgIGxhYmVsOiBcIlF1aXRcIixcbiAgICBhY2NlbGVyYXRvcjogcHJvY2Vzcy5wbGF0Zm9ybSA9PSBcImRhcndpblwiID8gXCJDb21tYW5kK1FcIiA6IFwiQ3RybCtRXCIsXG5cbiAgICBjbGljaygpIHtcbiAgICAgIGFwcC5xdWl0KCk7XG4gICAgfVxuXG4gIH1dXG59XTsgLy8gSWYgT1NYLCBhZGQgZW1wdHkgb2JqZWN0IHRvIG1lbnVcbi8vIGlmIChwcm9jZXNzLnBsYXRmb3JtID09IFwiZGFyd2luXCIpIHtcbi8vICAgbWFpbk1lbnVUZW1wbGF0ZS51bnNoaWZ0KHt9KTtcbi8vIH1cbi8vIEFkZCBkZXZlbG9wZXIgdG9vbHMgb3B0aW9uIGlmIGluIGRldlxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1haW5NZW51VGVtcGxhdGUucHVzaCh7XG4gICAgbGFiZWw6IFwiRGV2ZWxvcGVyIFRvb2xzXCIsXG4gICAgc3VibWVudTogW3tcbiAgICAgIHJvbGU6IFwicmVsb2FkXCJcbiAgICB9LCB7XG4gICAgICBsYWJlbDogXCJUb2dnbGUgRGV2VG9vbHNcIixcbiAgICAgIGFjY2VsZXJhdG9yOiBwcm9jZXNzLnBsYXRmb3JtID09IFwiZGFyd2luXCIgPyBcIkNvbW1hbmQrSVwiIDogXCJDdHJsK0lcIixcblxuICAgICAgY2xpY2soaXRlbSwgZm9jdXNlZFdpbmRvdykge1xuICAgICAgICBmb2N1c2VkV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XG4gICAgICB9XG5cbiAgICB9XVxuICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/electron.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"shopping-list","version":"1.0.3","description":"Electron shopping list desktop app","main":"main.js","scripts":{"build-main":"webpack --config ./webpack.electron.main.js","build-renderer":"webpack --config ./webpack.electron.renderer.js","build":"npm run clean && npm run build-main && npm run build-renderer","clean":"rm -rf dist/*","deploy":"cp -rf dist/* ./public","start":"electron .","server":"node ./server/index.js","package-mac":"electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds","package-win":"electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\\"Shopping List\\"","package-linux":"electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/icon.png --prune=true --out=release-builds"},"author":"Brad Traversy","license":"ISC","dependencies":{"core-js":"3.25.3","electron":"7.1.14","express":"4.18.1"},"devDependencies":{"@babel/core":"7.19.1","@babel/plugin-proposal-class-properties":"7.18.6","@babel/plugin-proposal-object-rest-spread":"7.18.9","@babel/preset-env":"7.19.1","@babel/preset-typescript":"7.18.6","babel-loader":"8.2.5","electron-packager":"14.2.1","html-webpack-plugin":"^5.5.0","typescript":"4.8.3","webpack":"5.74.0","webpack-cli":"4.10.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/electron.ts");
/******/ 	
/******/ })()
;