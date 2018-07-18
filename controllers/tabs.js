// タブが多い時に自動的に消す関数

var BEGIN_TABS = 10;
var DEL_TIME = 10 * 1000;
var tabs = [];
var tabs_data = {};

chrome.tabs.onCreated.addListener((tab)=>{
    let num = tabs.length;
    tabs[num]={id:tab.id,time:new Date()};
    tabs_data[tab.id] = tab;
});

chrome.tabs.onActivated.addListener((tab)=>{
    if(tabs !== []){
        tabs_update(tab)
    }
})

chrome.tabs.onUpdated.addListener((id,info,tab)=>{
    if(info.status === "complete"){
        if(tabs !== []) {
            tabs_update(tab);
            tabs_data[tab.id] = tab;
        }
        if(tabs.length > BEGIN_TABS){
            let now = new Date();
            for(let i=0; i<tabs.length; i++){
                if(now - tabs[i].time > DEL_TIME && tabs.length > BEGIN_TABS){
                    chrome.tabs.remove(tabs[i].id)
                    break
                }
            }
        }
    }
})

chrome.tabs.onRemoved.addListener((id, info)=>{
    let response = tabs_remove(id);
    if(response){
        chrome.storage.local.get('auto_remove', function (data) {
            // storageにauto_removeがなければ初期化
            if (typeof data.auto_remove === 'undefined') {
                let auto_remove = [];
                let now_time = new Date();
                let date_now = '' + now_time.getFullYear() + ("0" + (now_time.getMonth() + 1)).slice(-2) + ("0" + now_time.getDate()).slice(-2) + ("0" + (now_time.getHours())).slice(-2) + ("0" + (now_time.getMinutes())).slice(-2);
                auto_remove.push({_id: date_now, url: tabs_data[id].url, title: tabs_data[id].title, type: "web"});
                chrome.storage.local.set({auto_remove: auto_remove}, function () {
                    console.log('auto_remove_initialized');
                });
                // storageにauto_removeがある場合
            } else {
                let flag = true;
                // 重複の除外
                data.auto_remove.forEach(function (tab) {
                    if (tab.url === tabs_data[id].url) {
                        flag = false
                    }
                });
                if (flag) {
                    let now_time = new Date();
                    let date_now = '' + now_time.getFullYear() + ("0" + (now_time.getMonth() + 1)).slice(-2) + ("0" + now_time.getDate()).slice(-2) + ("0" + (now_time.getHours())).slice(-2) + ("0" + (now_time.getMinutes())).slice(-2);
                    data.auto_remove.push({_id: date_now, url: tabs_data[id].url, title: tabs_data[id].title, type: "web"});
                    chrome.storage.local.set({auto_remove: data.auto_remove}, function () {
                        console.log('auto_remove_stored');
                    });
                }
            }
        })
    }
});

function tabs_update(tab){
    let ind = tabs.findIndex(({id}) => id === tab.tabId)
    if(ind !== -1) {
        tabs.splice(ind, 1);
        tabs.push({id:tab.tabId,time:new Date()});
    }
}

function tabs_remove(del_id){
    let ind = tabs.findIndex(({id}) => id === del_id)
    if(ind !== -1) {
        tabs.splice(ind, 1);
        return true
    }else{
        return false
    }
}

function get_auto_remove(){
    return new Promise((resolve, reject) => {
        chrome.storage.local.get('auto_remove', (item) =>{
            item['auto_remove'] ? resolve(item['auto_remove']):reject([]);
        });
    })
}
