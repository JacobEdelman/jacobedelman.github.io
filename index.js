function makeHSCSio(){
  var newWindow=wm.createIframeWindow({
    title: "HSCS.io",
    url: "http://HSCS.io",
    width: 850,
    height: 500,
    x: 550,
    y: 110
  });
  newWindow.open();
}
function makeGithubVisual(){
  var newWindow=wm.createIframeWindow({
    title: "JacobEdelman - Github Visualizer",
    url: "http://ghv.artzub.com/#user=JacobEdelman",
    width: 920,
    height: 450,
    x: 500,
    y: 90
  });
  newWindow.open();
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
}

var wm;
$(document).ready(function() {
  wm = new Ventus.WindowManager();
  var test=wm.createWindow.fromQuery('#about', {
      title: 'About Jacob',
      url: "",
      width: 550,
      height: 600,
      x: 520,
      y: 30
  });//style="width: 367px; height: 470px; left: 695px; top: 42px; z-index: 10003;
  test.open();
});
