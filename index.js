console.log('main process working');

//electron module
const electron = require("electron");

//requirering a submodule
const app = electron.app;
//module for window, for the UI
const BrowserWindow = electron.BrowserWindow;

//building a file path 
const path = require("path");
const url = require("url");

//declaration of the window url
let win;

//defining a function that creates a window
function createWindow(){
    //instance
    win = new BrowserWindow({
        width: 413,
        height: 509,
        titleBarStyle: 'hidden',
        ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {})
    });

    //loading the html file inside the window
    win.loadURL(
    //takes an object
        url.format({
            pathname: path.join(__dirname, './src/index.html'),
            protocol: 'file',
            slashes: true
    }));


    //adds inspect in app mod
    win.webContents.openDevTools();
    
    
    //handles closing of the app
    win.on('closed', () =>{
        win = null;  
    })
}

//running window instantiation
app.on('ready', createWindow);