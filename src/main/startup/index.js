import { BrowserWindow } from 'electron'
const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`;

class StartWindow {
    constructor() {
        this.mainWindow = null;
        this.createWindow();
        this.eventInit();
    }
    createWindow() {
        this.mainWindow = new BrowserWindow({
            useContentSize: true,
            resizable: false,
            // frame: false,
            /* 透明窗体 */
            // transparent: true,   
            height: 415,
            width: 526
        });
        this.mainWindow.loadURL(winURL + '/startup')
    }
    eventInit() {
        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        });
    }
    show() {
        this.mainWindow.show()
    }
    hide() {
        this.mainWindow.hide()
    }
}
export default StartWindow
  