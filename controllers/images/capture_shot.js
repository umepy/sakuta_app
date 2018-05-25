function capture_shot(){
    chrome.tabs.captureVisibleTab(
        {"format":"png"},
        function(stream) {
            chrome.storage.local.set({"image01":stream}, function(){})
            //alert(stream); //<-- NULL
            if (!stream) {
              console.error('Error starting tab capture: ' + chrome.runtime.lastError.message || 'UNKNOWN');
            }
        }
    );
}

capture_shot();
