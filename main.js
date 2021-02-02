const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

if (require("electron-squirrel-startup")) return app.quit();
let win;

async function createWindow() {
  win = new BrowserWindow({
    width: 275,
    height: 450,
    webPreferences: {
      nodeIntegration: false,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  win.setMenuBarVisibility(false);
  win.setTitle("");
}

app.on("ready", createWindow);
