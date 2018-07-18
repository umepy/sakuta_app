// 過去の閲覧履歴を分析する関数

// 閲覧履歴数の集積
function get_history(){
    // 検索時の要素
    // test: 検索時の文字列、空で全取得
    // startTime: どれくらい前の履歴までさかのぼるか（mili sec）、epoch時間なので現時刻 - 目的時間で計算、hoursで何時間前まで取得するか指定
    // maxResults: 最大の検索数
    const hours = 24; // 168 hours:a week, 5040 hours:a month
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

// アクセス数の多い順で並べ替えをする関数
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

// 過去の閲覧履歴の詳細な取得
function get_history_detail(){
    let time_split = 4; // 1日の分割数、デフォルトは4
    let splited_time = 24 / time_split; // 単位時間
    let search_limit = 200; // 検索時間の上限、デフォルトは1月(5040)
    let unit_time = 24 * 60 * 60 * 1000 / time_split; // 1unitの時間
    let now_time = new Date(); // 現在時刻
    let start_time, end_time; //検索時の範囲指定用の時刻
    let search_limit_time = now_time.getTime() - search_limit * 60 * 60 * 1000; //検索の時間上限値
    let history_log = {}; // historyのログが入る、keyは区分時間
    for(i=0;i<time_split;i++){
        history_log[i]={};
    }
    // 現在時刻と直近の時間帯をstart,end_timeにセット
    end_time = now_time.getTime();
    // 4分割は斜めにやりたいので、最初に3ひいておく(0:21-3, 1:3-9, 2:9-15, 3:15-21)
    start_time = new Date(new Date(now_time-3 * 60 * 60 * 1000).getFullYear(), new Date(now_time-3 * 60 * 60 * 1000).getMonth(), new Date(now_time-3 * 60 * 60 * 1000).getDate(), 3 + splited_time * (Math.floor((new Date(now_time-3 * 60 * 60 * 1000).getHours())/splited_time))).getTime();

    let first_query = {
        text:'',
        startTime:start_time,
        endTime:end_time,
        maxResults:100000
    };

    let quereis = []
    while(first_query.startTime > search_limit_time){
        let query = {
            text:'',
            startTime:first_query.startTime,
            endTime:first_query.endTime,
            maxResults:100000
        };
        //現在の時刻が配列の何番目に入るか計算
        let kubun=Math.floor((new Date(query.startTime).getHours()+3)/splited_time);
        if(kubun >=4) kubun = 0;
        while(query.startTime < query.endTime){
            let subquery = {
                text:'',
                startTime:query.endTime-60 * 1000,
                endTime:query.endTime,
                maxResults:100000
            };
            quereis[quereis.length] = [subquery, kubun];
            query.endTime-= 60 * 1000;
        }
        first_query.endTime=first_query.startTime;
        first_query.startTime-= splited_time * 60 * 60 * 1000;
    }

    let a = () => {
        return Promise.all(quereis.map((data) => {
            return get_hist(data)
        }))
    }
    a().then((result) =>{
        for(let i=0; i<result.length; i++){
            if(result[i]!=={}) {
                for (url in result[i]) {
                    if(url.indexOf('?') !== -1) let new_url = url.slice(0,url.indexOf('?'));
                    if (history_log[result[i][url].kubun][new_url]) history_log[result[i][url].kubun][new_url] += 1;
                    else {
                        history_log[result[i][url].kubun][new_url] = 1;
                    }
                }
            }
        }
        chrome.storage.local.set({history_data: history_log}, function () {
            console.log('Saved Analysed result');
        });
        update_top_site()
    })
}

// 同期させつつ、過去の閲覧履歴を取得する関数
function get_hist(query){
    return new Promise((resolve)=>{
        chrome.history.search(query[0], (results) =>{
            let history={};
            results.forEach(function (result) {
                result.kubun = query[1];
                history[result.url] = result;
            });
            resolve(history);
        });
    });
}

// 上位のサイトのTOP20くらいまで数えて更新する関数
function update_top_site(){
    chrome.storage.local.get('history_data', function (data) {
        let result = {0:[], 1:[], 2:[], 3:[]}
        if (typeof data.history_data !== 'undefined') {
            for(let i in [0,1,2,3]){
                if(data.history_data[i] !== {}){
                    for(let j in data.history_data[i]){
                        result[i][result[i].length] = {url:j, visit:data.history_data[i][j], type:'web', _id:'test'}
                    }
                }
                result[i].sort((a,b)=>{
                    if(a.visit > b.visit) return -1;
                    if(a.visit < b.visit) return 1;
                    return 0;
                })
                if(result[i].length > 20){
                    result[i].splice(20, result[i].length)
                }
            }

            chrome.storage.local.set({history_top: result}, function () {
                console.log('Saved History Top');
            });
        }
    });
}

// 時間帯おすすめページを取得する関数
function get_top_site(get_number){
    return new Promise((resolve) =>{
        chrome.storage.local.get('history_top', (data)=>{
            console.log(data)
            if(data.history_top !== undefined){
                let kubun=Math.floor((new Date().getHours() + 3)/6);
                if(kubun >= 4) kubun = 0;
                resolve(data.history_top[kubun].slice(0,get_number))
            }else{
                resolve([])
            }
        })
    })
}

// インストール時のみに行う分析イベント
chrome.runtime.onInstalled.addListener((detail)=>{
    get_history_detail()
})
