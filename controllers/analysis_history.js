// 過去の閲覧履歴を分析する関数

// 閲覧履歴数の集積
function cal_num_of_histry(){
    // 検索時の要素
    // test: 検索時の文字列、空で全取得
    // startTime: どれくらい前の履歴までさかのぼるか（mili sec）、epoch時間なので現時刻 - 目的時間で計算、hoursで何時間前まで取得するか指定
    // maxResults: 最大の検索数
    let hours = 168;
    let query = {
        text:'',
        startTime:new Date().getTime() - hours * 60 * 60 * 1000,
        maxResults:10000
    };

    let history = [];

    // 実際の検索
    chrome.history.search(query, function (results) {
        results.forEach(function (result) {
            //console.log(result);
            history[history.length] = result;
            //document.write(result.title)
            //document.write((new Date().getTime() - result.lastVisitTime) / 1000 /60 /60)
            //document.write('</br>')

            history.sort(function(a,b){
                if(a.visitCount>b.visitCount) return -1;
                if(a.visitCount<b.visitCount) return 1;
                return 0;
            });
        });
        history.forEach(function (hist){
            document.write(hist.title);
            document.write(' : ');
            document.write(hist.visitCount);
            document.write('</br>');
            document.write('\n');
        });
    });

    console.log(history);
}

cal_num_of_histry();