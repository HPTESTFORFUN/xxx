
 var globalREST = "http://localhost:8080/sharemusic/rest";
 var feedREST = globalREST + "/feed";
 var url = null;
var app = angular.module("appExtension", []);
app.controller("popupController", function($scope, $http){
    $("#postNowButton").click(function(){
        var song = $("#name-song").text().trim();
        var singer = $("#name-singer").text().trim();
        var think = $("#thinking").val().trim();
        var category = $("#cbFeeling").val().trim();
        var source_song = null;
        var code_song = null;
        if(url != null || url != undefined || url.length != 0){
            if(url.indexOf("mp3.zing.vn") != -1){
                source_song = "mp3.zing.vn";
                var arr = url.split("/");
                var arr2 = arr[arr.length - 1].split(".");
                code_song = arr2[0];
            }
            if(url.indexOf("nhaccuatui.com") != -1){
                source_song = "nhaccuatui.com";
                var arr = url.split(".");
                code_song = arr[arr.length - 2];
            } 

        }
        var data = {
            id: null,
            idUser: null,
            songName: song,
            singerName: singer,
            feelingContent: think == null || think == undefined || think == '' ? null : think,
            link: url == null || url == undefined ? null : url,
            source : source_song,
            codeSong : code_song,
            dateCreated: new Date(),
            state: 2
        };
        $http.post(feedREST + "/add-happy-feed", data).then(function success(res){
            if(res){
                window.close();
            }else{
                console.log("ERROR :(");
            }
        }, function error(res){

        });
    });
});
$(document).ready(function(){
   
    chrome.storage.sync.get(['song', 'singer', 'link'], function(obj){
        $('#name-song').text(obj.song);
        $('#name-singer').text(obj.singer);
        url = obj.link;
       console.log(url);
    });
    
});
