function get_images(){
    chrome.storage.local.get("image01", function(value){
        console.log(value.image01)
        document.write('<img src='+value.image01+' width="100%" alt="Red dot" />');
    })
}

get_images();
