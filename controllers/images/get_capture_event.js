//capture_shot.js へのイベントの送信
//正しくは、capture_event という message で送っているだけでファイル指定はない
chrome.runtime.sendMessage(
    {
        message: "capture_event"
    },
    function(response) {
        //console.log(response);
        //alert(response);
    }
);
