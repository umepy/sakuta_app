// 過去の閲覧履歴を分析する関数

// 閲覧履歴数の集積
function get_history(){
    // 検索時の要素
    // test: 検索時の文字列、空で全取得
    // startTime: どれくらい前の履歴までさかのぼるか（mili sec）、epoch時間なので現時刻 - 目的時間で計算、hoursで何時間前まで取得するか指定
    // maxResults: 最大の検索数
    const hours = 168; // 168 hours:a week, 5040 hours:a month
    let query = {
        text:'',
        startTime:new Date().getTime() - hours * 60 * 60 * 1000,
        maxResults:100000
    };
    let history = {};

    // 実際の検索
    chrome.history.search(query, function (results) {
        results.forEach(function (result) {
            history[result.url] = result;
            //document.write((new Date().getTime() - result.lastVisitTime) / 1000 /60 /60)
        });
    });
    return history;
}

// ブックマークのデータを取得
function get_bookmark(){
    let bookmark_bar, other_bookmark;
    let rt_object = {bookmarks:[], len_of_bar:0};
    chrome.bookmarks.getTree(function (nodes) {
        root=nodes[0].children;
        for (i=0;i<root.length;i++){
            if(root[i].title === "ブックマーク バー"){
                bookmark_bar = root[i];
            }
            if(root[i].title === "その他のブックマーク"){
                other_bookmark = root[i];
            }
        }
        rt_object.len_of_bar = bookmark_bar.children.length;
        for(i=0;i<bookmark_bar.children.length;i++){
            rt_object.bookmarks[rt_object.bookmarks.length] = bookmark_bar.children[i];
        }
        /* その他のブックマークもソートに追加するかどうか
        for(i=0;i<other_bookmark.children.length;i++){
            rt_object.bookmarks[rt_object.bookmarks.length] = other_bookmark.children[i];
        }
        */
        //get first of bookmark bar
        //fir = bookmark_bar.children[0];
        //sec = bookmark_bar.children[1];
        //chrome.bookmarks.move(sec.id,{parentId:sec.parentId,index:0});
        sort_bookmark_by_access_number(rt_object);
    });
}

// アクセス数をカウントし、降順にお気に入りをソートする関数
function sort_bookmark_by_access_number(hist, in_bookmark){
    let bookmark = in_bookmark.bookmarks;
    for(i=0; i<bookmark.length; i++){
        if (hist[bookmark[i].url] ){
            bookmark[i].count = hist[bookmark[i].url].visitCount;
        }else{
            // http's'の場合の分岐
            https_url = insertStr(bookmark[i].url,4,'s')
            if (hist[https_url]){
                bookmark[i].count = hist[https_url].visitCount;
            }else{
                bookmark[i].count = 0;
            }
        }
    }
    bookmark.sort(function(a,b){
        if(a.count < b.count) return 1;
        if(a.count > b.count) return -1;
        return 0;
    });
    console.log(bookmark);
}

// insert function
function insertStr(str, index, insert) {
    return str.slice(0, index) + insert + str.slice(index, str.length);
}

//
function manage_bookmark_by_number(){
    const hours = 168; // 168 hours:a week, 5040 hours:a month
    let query = {
        text:'',
        startTime:new Date().getTime() - hours * 60 * 60 * 1000,
        maxResults:100000
    };
    let history = {};

    // 実際の検索
    chrome.history.search(query, function (results) {
        results.forEach(function (result) {
            history[result.url] = result;
            //document.write((new Date().getTime() - result.lastVisitTime) / 1000 /60 /60)
        });
        let bookmark_bar, other_bookmark;
        let rt_object = {bookmarks:[], len_of_bar:0};
        chrome.bookmarks.getTree(function (nodes) {
            root=nodes[0].children;
            for (i=0;i<root.length;i++){
                if(root[i].title === "ブックマーク バー"){
                    bookmark_bar = root[i];
                }
                if(root[i].title === "その他のブックマーク"){
                    other_bookmark = root[i];
                }
            }
            rt_object.len_of_bar = bookmark_bar.children.length;
            for(i=0;i<bookmark_bar.children.length;i++){
                rt_object.bookmarks[rt_object.bookmarks.length] = bookmark_bar.children[i];
            }
            sort_bookmark_by_access_number(history, rt_object);
        });
    });
}

manage_bookmark_by_number();