//スクリーンショットを取るurlの発見//capture_event を受け取り，そのページのスクリーンショットを取得

//スクリーンショット取得上限数
var storage_limit = 30;

//get_capture_event.js からのイベントの取得
chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        //console.log(request)
        if(request.message == "capture_event"){
            //スクリーンショットの取得
            var title = request.data[0];
            var img = request.data[1];
            var url = request.data[2];
            //console.log(img)
            chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
                if(url == tabs[0].url) capture_shot(title, img, url);
            });
        }
        return true;
    }
);

//スクリーンショットを取るurlの発見
function capture_shot(title, img, url){
    chrome.storage.local.get("url_list",
        function(value){url_list = value["url_list"];
        if(typeof url_list === 'undefined') url_list = [];
        //jpg データの取得と保存
        if(typeof img === 'undefined' || img == null){
            store_jpg(url, url_list, title);
        }
        else{
            control_storage(url, url_list, title, img)
        }
    })
}

//jpg データの取得と保存
//jpeg も選択可能だが、jpgの方が軽いため
//url: スクリーンショットを取得する url
//url_list: スクリーンショット取得済みの url の list
//stream: jpg のデータ
function store_jpg(url, url_list, title){
    //現在の tab のスクリーンショットを取得
    chrome.tabs.captureVisibleTab(
        //jpg の指定
        {"format":"jpeg", "quality":10},
        function(stream) {
            //データの保存(重複する url の管理含む)
            control_storage(url, url_list, title, stream);
            //alert(stream); //<-- NULL
            if (!stream) {
              console.error('Error starting tab capture: ' + chrome.runtime.lastError.message || 'UNKNOWN');
            }
        }
    );
}

//スクリーンショット数が最大値(storage_limit)の時と重複した際の url の検知
//url: スクリーンショットを取得する url
//url_list: スクリーンショット取得済みの url の list
//stream: jpg のデータ
function control_storage(url, url_list, title, stream){
    //delete_url: 削除する url の発見
    var index = url_list.indexOf(url);
    var delete_url;
    if(index >= 0){
        delete_url = url_list[index];
        url_list.splice(index, 1);
    }
    else if(url_list.length >= storage_limit){
        delete_url = url_list[0];
        url_list.shift();
    }
    url_list.push(url);
    //データの保存
    store_data(url, url_list, title, stream, delete_url);
}

//データの保存
//url: スクリーンショットを取得する url
//url_list: スクリーンショット取得済みの url の list
//stream: jpg のデータ
//delete_url: 削除する url
function store_data(url, url_list, title, stream, delete_url){
    //データの削除がある時，その値(delete_url)を更新
    if(typeof delete_url !== 'undefined'){
        chrome.storage.local.remove([delete_url],
            function(){chrome.storage.local.set({[url]:[title, stream, undefined], "url_list": url_list}, function(){})})
    }
    //データの削除がない時
    else{
        chrome.storage.local.set({[url]:[title, stream, undefined], "url_list": url_list}, function(){})
    }
}
