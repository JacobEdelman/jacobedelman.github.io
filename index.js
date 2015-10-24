function makeHSCTF(){
  var newWindow=wm.createIframeWindow({
    title: "HSCTF",
    url: "http://hsctf.com",
    width: 850,
    height: 500,
    x: 230,
    y: 100
  });
  newWindow.open();
  if(window.is_mobile){
        newWindow.maximize();
  }
}

function makeHSCSio(){
  var newWindow=wm.createIframeWindow({
    title: "HSCS.io",
    url: "http://HSCS.io",
    width: 850,
    height: 500,
    x: 250,
    y: 110
  });
  newWindow.open();
  if(window.is_mobile){
        newWindow.maximize();
  }
}
function makeGithubVisual(){
  var newWindow=wm.createIframeWindow({
    title: "JacobEdelman - Github Visualizer",
    url: "http://ghv.artzub.com/#user=JacobEdelman",
    width: 920,
    height: 450,
    x: 200,
    y: 80
  });
  newWindow.open();
    if(window.is_mobile){
        newWindow.maximize();
    }
}
function makePublicKey(){
  var newWindow=wm.createIframeWindow({
    title: "Public Key for jac on Keybase.io",
    url: "key.txt",
    width: 500,
    height: 500,
    x: 600,
    y: 120
  });
  newWindow.open();
    if(window.is_mobile){
        newWindow.maximize();
    }
}
function makeSiteVerify(){
  var newWindow=wm.createIframeWindow({
    title: "keybase.txt",
    url: "keybase.txt",
    width: 500,
    height: 500,
    x: 650,
    y: 130
  });
  newWindow.open();
    if(window.is_mobile){
        newWindow.maximize();
    }
}

var wm;
$(document).ready(function() {
  wm = new Ventus.WindowManager();
  var about=wm.createWindow.fromQuery('#about', {
      title: 'About Jacob',
      url: "",
      width: 550,
      height: 600,
      x: 520,
      y: 30
  });//style="width: 367px; height: 470px; left: 695px; top: 42px; z-index: 10003;
  about.open();
    if(window.is_mobile){
        about.maximize();
    }
    
});
