'use strict';

const electron = require('electron');
const path = require('path');

// Module to control application life.
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
})
