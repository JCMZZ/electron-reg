import { app, ipcMain, BrowserWindow, Menu } from 'electron'
/* 处理 vuex 问题 */
import '../renderer/store/index'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:9080/startup` :
  `file://${__dirname}/index.html`;

class MainWindow {
  constructor() {
    this.mainWindow = null;
    this.startWindow = null;
    this.eventInit();
    this.initIpcMain();
  }
  createWindow() {
    /* 隐藏菜单栏 */
    Menu.setApplicationMenu(null);
    this.mainWindow = new BrowserWindow({
      height: 415,
      width: 526,
      resizable: false,
      // useContentSize: true,
      frame: false,
      backgroundColor: '#101B2D',
      webPreferences: {
        devTools: true
      }
    });
    this.mainWindow.loadURL(winURL);
    this.mainWindow.webContents.openDevTools();
    this.mainWindow.on('hide', ()=>{
      this.mainWindow.close();
      this.mainWindow = null;
    })
  }
  eventInit() {
    app.on('ready', () => {
      this.createWindow();
    })
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    })
  }
  initIpcMain() {
    ipcMain.on('router-index', () => {
      this.mainWindow.setSize(1000, 563);
      this.mainWindow.setResizable(true);
      this.mainWindow.center();
    });
    ipcMain.on('router-startup', () => {
      this.mainWindow.setSize(526, 415);
      this.mainWindow.setResizable(false);
      this.mainWindow.center();
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