const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const url = require("url");
const path = require("path");

const isDev = !app.isPackaged;
if (require("electron-squirrel-startup")) return app.quit();
let win;

function createWindow() {
	win = new BrowserWindow({
		width: 275,
		height: 450,
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js"),
		},
	});
	win.loadFile("index.html");
	win.setMenuBarVisibility(false);
	win.setTitle("");
}

if (isDev) {
	require("electron-reload")(__dirname, {
		electron: path.join(__dirname, "node_modules", ".bin", "electron"),
	});
}

ipcMain.on("notify", (_, message) => {
	new Notification({ title: "Notify", body: message }).show();
});

app.on("ready", createWindow);
