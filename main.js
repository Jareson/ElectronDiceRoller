const electron = require("electron");
const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const fs = require("fs");
const path = require("path");

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
