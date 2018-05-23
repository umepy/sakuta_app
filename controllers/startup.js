// chromeを立ち上げた際にstartupページを表示するjs
var startup = new Object();
startup.url = "startup_test.html";
chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.create(startup);

})

