chrome.runtime.onMessage.addListener(function(request, sender, response){
    if(request.todo == "showPopup"){
        var url = 'xxx';
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            url = tabs[0].url;
            chrome.storage.sync.set({'link' : url}, function(){
                
            });
           
        });

        var w = 600;
        var h = 400;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2); 
    
        chrome.windows.create({'url': 'popupDetail.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , function(window) {
        });
    }else{
        console.log("NO luck !!!");
    }
});