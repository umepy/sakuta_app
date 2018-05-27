// chromeを立ち上げた際にstartupページを表示するjs

let startup = Object();
//startup.url = "startup_react.html";
startup.url = "startup_test.html";
chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.create(startup);
});

