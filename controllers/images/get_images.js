//local に保存してある screenshot の取り出しと
//html 形式への出力を行う
//最終的には不要

//取得したスクリーンショットの取得
//url_list: スクリーンショット取得済みの url の list
function get_images(){
    var url_list;
    chrome.storage.local.get("url_list",
        function(value){
            url_list = value["url_list"];
            //まだスクリーンショットを取ってない時は実行しない
            if(typeof url_list !== 'undefined'){
                get_shot(url_list);
            }
        }
    )
}

//取得したスクリーンショットを html 形式に
//url_list: スクリーンショット取得済みの url の list
function get_shot(url_list){
    var i;
    chrome.storage.local.get(url_list, function(value){
        for(i in url_list){
            //スクリーンショットを正確に取れていないときは表示しない
            if(typeof value[url_list[i]] !== 'undefined'){
                document.write('<p>'+url_list[i]+'</p>')
                document.write('<img src='+value[url_list[i]]+' width="100%" alt="Red dot" />');
            }
        }
    })
}

get_images();
