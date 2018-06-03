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

        // storageにseelaterがなければ初期化
        if (typeof data.seelater === 'undefined') {
            let seelater = [];
            seelater[seelater.length] = {url: tab.url, title: tab.title};
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
                data.seelater[data.seelater.length] = {url: tab.url, title: tab.title};
                console.log(data.seelater);
                chrome.storage.local.set({seelater: data.seelater}, function () {
                    console.log('add_seelater_stored');
                });
            }
        }
    });
});

// 後で見るの削除関数、引数は削除するページのurl
function del_seelater(url){
    chrome.storage.local.get('seelater', function (data) {
        if (typeof data.seelater !== 'undefined') {
            let flag = false;
            let index = 0;
            for (let i=0; i< data.seelater.length; i++){
                if (url == data.seelater[i].url){
                    flag = true;
                    break;
                }
            }
            if (flag) {
                data.seelater.splice(i,1);
                chrome.storage.local.set({seelater: data.seelater}, function () {
                    console.log('delete_seelater');
                });
            }
        }
    });
}


// スタック化された後で見るデータを呼ぶ関数,非同期でくそうざいのでPromise型で返す
function get_seelater(){
    let key = 'seelater';
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (item) =>{
            key ? resolve(item[key]):reject(key);
        });
    });
}