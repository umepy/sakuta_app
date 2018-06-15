//後で見る関連のreactが使う関数

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
            Object.keys(item).length !== 0 ? resolve(item[key]):resolve([]);
        });
    });
}