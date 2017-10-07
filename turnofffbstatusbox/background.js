$(document).ready(function(){
    chrome.storage.sync.get(['statusBoxOnFacebook'], function(obj){
        if(obj.statusBoxOnFacebook){
            
            $('#feedx_sprouts_container').addClass('hideStatusBox');
            $('#timeline_composer_container').addClass('hideStatusBox');
        }
    });
    
});