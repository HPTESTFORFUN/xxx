$(document).ready(function(){
    chrome.storage.sync.get(['statusBoxOnFacebook'], function(obj){
        if(obj.statusBoxOnFacebook){
            
            $('#textNotify').text('True !!!');
        }else{
            
            $('#textNotify').text('False !!!');
        }
    });
    $('#btnTurnOnOff').click(function(){
        chrome.storage.sync.get(['statusBoxOnFacebook'], function(obj){
            if(obj.statusBoxOnFacebook){
                chrome.storage.sync.set({'statusBoxOnFacebook' : false}, function(){});
                $('#textNotify').text('Reload page to show change !!!');
            }else{
                chrome.storage.sync.set({'statusBoxOnFacebook' : true}, function(){});
                $('#textNotify').text('Reload page to show change !!!');
            }
        });
       
    });
});