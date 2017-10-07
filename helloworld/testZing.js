// document.querySelector(".info-content").append('<button type="button">XXX</button>');
$("div.info-content:first > div")
.append(' - <button type="button" id="zzz" class="btn">Chia sẻ</button>');
$("#zzz").click(function(){
    var text = $("div.info-content:first > div").text();
    var arr = text.split("-");
    // var songName = $("div.info-content:first > div > h1").text();
    // var singerName = $("div.info-content:first > div > h1 > div > h2 > a").text();
    var songName = arr[0];
    var singerName = arr[1];
    chrome.storage.sync.set({'song' : songName, 'singer' : singerName}, function(){
        
    });
    chrome.runtime.sendMessage({todo : "showPopup"});
});
