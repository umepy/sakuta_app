// 右クリックしたときのメニュー

// 右クリで後で見るページを追加する関数
right_function = function(){
    let test =1
};

chrome.contextMenus.create({
    title: "後で見る",
    id:'test',
    contexts:["page"],
});