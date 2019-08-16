import {
  app,
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
  }
  createWindow() {
    this.mainWindow = new BrowserWindow({
      height: 563,
      useContentSize: true,
      width: 1000
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
  eventInit() {
    app.on('ready', () => {
      this.createStartWindow();
      // this.createWindow();
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