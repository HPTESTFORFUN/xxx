$("div.name_title:first")
.append('<button type="button" id="xxx" class="btn">Chia sẻ</button>');
$("#xxx").click(function(){
    var songName = $("div.name_title:first > h1").text();
    var singerName = $("div.name_title:first > h2 > a").text();
    chrome.storage.sync.set({'song' : songName, 'singer' : singerName}, function(){
        
    });
    chrome.runtime.sendMessage({todo : "showPopup"});
});