import { BrowserWindow, Menu } from 'electron'
const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`;

class StartWindow {
    constructor() {
        this.startWindow = null;
        this.createWindow();
    }
    createWindow() {
        /* 隐藏菜单栏 */
        Menu.setApplicationMenu(null);
        this.startWindow = new BrowserWindow({
            useContentSize: true,
            resizable: false,
            // show: false,
            // frame: false,
            /* 透明窗体 */
            // transparent: true,
            titleBarStyle: 'hidden',
            height: 415,
            width: 526,
            backgroundColor: '#101B2D',
            webPreferences: {
                devTools: true
            }
        });
        this.startWindow.webContents.openDevTools({mode:'bottom'});
        this.startWindow.loadURL(winURL + '/startup');
        this.startWindow.on('hide',()=>{
            this.startWindow.close();
            this.startWindow = null;
        })
    }
    loadURL(url) {
        this.startWindow.loadURL(url);
    }
    show() {
        if(this.startWindow === null){
            this.createWindow();
        }
        this.startWindow.show();
    }
    hide() {
        this.startWindow.hide();
    }
}
export default StartWindow
  