import {
  app,
  ipcMain,
  BrowserWindow
} from 'electron'
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
  }
  inIt() {
    this.eventInit();
    this.initIpcMain();
  }
  createWindow() {
    this.mainWindow = new BrowserWindow({
      height: 563,
      show: false,
      useContentSize: true,
      width: 1000,
      backgroundColor: '#101B2D'
    })
    this.mainWindow.loadURL(winURL)
    this.mainWindow.on('closed', () => {
      this.mainWindow = null
    })
  }
  createStartWindow() {
    this.startWindow = new StartWindow();
    this.startWindow.show();
  }
  show() {
    this.mainWindow.show()
  }
  hide() {
    this.mainWindow.hide()
  }
  eventInit() {
    app.on('ready', () => {
      this.createStartWindow();
      this.createWindow();
    })
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    app.on('activate', () => {
      if (mainWindow === null) {
        createWindow()
      }
    })
  }
  initIpcMain() {
    ipcMain.on('router-index', () => {
      this.startWindow.hide();
      this.mainWindow.show();
    });
    ipcMain.on('router-startup', () => {
      this.mainWindow.hide();
      this.mainWindow.loadURL(winURL + '/startup')
      this.startWindow.show();
    });
    ipcMain.on('router-login', () => {
      this.mainWindow.hide();
      this.startWindow.show();
    });
  }
}
new MainWindow().inIt();
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