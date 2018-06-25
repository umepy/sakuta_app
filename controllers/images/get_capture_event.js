//capture_shot.js へのイベントの送信
//正しくは、capture_event という message で送っているだけでファイル指定はない
var headData = document.head.children;
var image_Flag = false
for (var i = 0; i < headData.length; i++){
    var propertyval = headData[i].getAttribute("property");
    if(propertyval !== null && propertyval.indexOf("og:image") != -1){
        image_Flag = true
        continue
    }
}

if(image_Flag == false){
    chrome.runtime.sendMessage(
        {
            message: "capture_event"
        },
        function(response) {
            //console.log(response);
            //alert(response);
        }
    )
}
