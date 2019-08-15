import { BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = `file://c:/Jvtd/JCM/Electron/electron-reg/src/startuprender/startup.html`;
function createWindow () {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    useContentSize: true,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    /* 创建无框架窗口 */
    // frame: false
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  return mainWindow;
}
export default createWindow;
