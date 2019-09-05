import { app, ipcMain, BrowserWindow } from 'electron'
/* 处理 vuex 问题 */
import '../renderer/store/index'
import StartWindow from './startup'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:9080` :
  `file://${__dirname}/index.html`;

class MainWindow {
  constructor() {
    this.mainWindow = null;
    this.startWindow = null;
    this.eventInit();
    this.initIpcMain();
  }
  createWindow() {
    this.mainWindow = new BrowserWindow({
      height: 563,
      show: false,
      useContentSize: true,
      width: 1000,
      backgroundColor: '#101B2D',
      webPreferences: {
        devTools: true
      }
    });
    this.mainWindow.loadURL(winURL);
    this.mainWindow.webContents.openDevTools({mode:'bottom'});
    this.mainWindow.on('hide', ()=>{
      this.mainWindow.close();
      this.mainWindow = null;
    })
  }
  createStartWindow() {
    this.startWindow = new StartWindow();
    this.startWindow.show();
  }
  show() {
    if(this.mainWindow === null) {
      this.createWindow();
    }
    this.mainWindow.show();
  }
  hide() {
    this.mainWindow.hide();
  }
  eventInit() {
    app.on('ready', () => {
      this.createStartWindow();
      this.createWindow();
    })
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    })
    app.on('activate', () => {
      if (this.mainWindow === null) {
        this.createWindow();
      }
    })
  }
  initIpcMain() {
    ipcMain.on('router-index', () => {
      this.startWindow.hide();
      this.show();
    });
    ipcMain.on('router-startup', () => {
      this.hide();
      this.startWindow.show();
    });
  }
}
new MainWindow();
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */