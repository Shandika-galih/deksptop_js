const {BrowserWindow, app} = require('electron');
function createWindow(){
    const win = new BrowserWindow({
        widht: 800,
        height: 600,
        webPreferences:{
            nodeIntergreation: true
        }
    })
    win.loadFile("index.html");
}
app.whenReady().then(createWindow)