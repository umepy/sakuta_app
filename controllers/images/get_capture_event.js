//capture_shot.js へのイベントの送信
//正しくは、capture_event という message で送っているだけでファイル指定はない
var headData = document.head.children;
var img
var title

for (var i = 0; i < headData.length; i++){
    var propertyval = headData[i].getAttribute("property");
    if(propertyval !== null && propertyval.indexOf("og:title") != -1){
        title = headData[i].content
    }
    else if(propertyval !== null && propertyval.indexOf("og:image") != -1){
        img = headData[i].content
    }

    if(typeof img !== 'undefined' && typeof title !== 'undefined'){
        break
    }
}

chrome.runtime.sendMessage(
    {
        message: "capture_event",
        data: [title, img, document.URL]
    },
    function(response) {
        //console.log(response);
        //alert(response);
    }
)
