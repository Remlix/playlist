let songNames = ["thebox" , "Paramedic" , "brb" , "lifestyle"]
songNames.forEach(function(song){
    console.log(song + " ") ;
$(".songList").append("<p>" + song + "</p>")
});