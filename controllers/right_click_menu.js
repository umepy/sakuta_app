// 右クリックしたときのメニュー

// 右クリで後で見るページを追加
chrome.contextMenus.create({
    title: "後で見る",
    id:'add_see_later',
    contexts:["page"],
});

// 後で見るを押した時の挙動
info = {menuitemid:'add_see_later'};
chrome.contextMenus.onClicked.addListener(function (info, tab){
    new Promise((resolve) => {
        chrome.storage.local.get('seelater', function (data) {
            now_time=new Date();
            let date_now = ''+now_time.getFullYear()+("0"+(now_time.getMonth() + 1)).slice(-2)+("0"+now_time.getDate()).slice(-2)+("0"+(now_time.getHours())).slice(-2)+("0"+(now_time.getMinutes())).slice(-2);
            // storageにseelaterがなければ初期化
            if (typeof data.seelater === 'undefined') {
                let seelater = [];
                seelater.push({_id:date_now,url: tab.url, title: tab.title, type:"web"});
                chrome.storage.local.set({seelater: seelater}, function () {
                    console.log('add_seelater_initialized');
                });
            // storageにseelaterがある場合
            }else {

                let flag = true;
                // 重複の除外
                data.seelater.forEach(function (tabs) {
                    if (tabs.url == tab.url){
                        flag = false
                    }
                });
                if (flag) {
                    data.seelater.push({_id:date_now, url: tab.url, title: tab.title, type:"web"});
                    //console.log(data.seelater);
                    chrome.storage.local.set({seelater: data.seelater}, function () {
                        console.log('add_seelater_stored');
                    });
                }
            }
        })
    })
    .then(get_capture(tab.title, tab.url));
});

function get_seelater(){
    let key = 'seelater';
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (item) =>{
            item[key] ? resolve(item[key]):reject([]);
        });
    });
}

//capture_shot.js へのイベントの送信
//正しくは、capture_event という message で送っているだけでファイル指定はない
function get_capture(title, url){
    chrome.storage.local.get(url,
        function(value){
            var img;
            try{
                img = value[url][1]
                capture_shot(title, img, url)
            }
            catch(e){
                capture_shot(title, img, url)
            }

        }
    )
}

get_seelater().then((data)=>console.log(data))


//background.jsからbackground.jsにメッセージが届かなかったので
//仕方ないから、capture_shotと同じスクリプトを貼って対応。悲しみ
//スクリーンショット取得上限数
var storage_limit = 30;

//スクリーンショットを取るurlの発見
function capture_shot(title, img, url){
    chrome.storage.local.get("url_list",
        function(value){url_list = value["url_list"];
        if(typeof url_list === 'undefined') url_list = [];
        //jpg データの取得と保存
        if(typeof img === 'undefined'){
            console.log(img)
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
