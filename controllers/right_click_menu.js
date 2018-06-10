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
                console.log(data.seelater);
                chrome.storage.local.set({seelater: data.seelater}, function () {
                    console.log('add_seelater_stored');
                });
            }
        }
    });
});

function get_seelater(){
    let key = 'seelater';
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (item) =>{
            key ? resolve(item[key]):reject(undefined);
        });
    });
}

get_seelater().then((data)=>console.log(data))