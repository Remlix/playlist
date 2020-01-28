let songNames = ["thebox" , "Paramedic" , "Brb" , "idfc"]
let artists = ["roddy" , "SOBxRBE" , "LuhKel" , "blackbear"]
songNames.forEach(function(song){
    console.log(song + " ") ;
    $(".songList").append("<p>" + song + "</p>")


});
artists.forEach(function(creator){
    $(".artistList").append("<p>" + creator + "</p>")
});
var input = $("inbox").val();