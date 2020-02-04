let songs = [
    {artist: "Xavier" , song: "scorin" , length: "2:30" },
    {artist: "Kendrick" , song: "humble" , length: "2:50"}
]
songs.forEach(function(song){
    $(".songList").append("<p>" + song.song + "</p>" )
    $(".artistList").append("<p>" + song.artist + "</p>")
})
songs.forEach(function(song){
    console.log(song);
})
//let songNames = ["scorin" , "Paramedic" , "Brb" , "idfc"]
//let artists = ["xavier" , "SOBxRBE" , "LuhKel" , "blackbear"]
//songNames.forEach(function(song){
  //  console.log(song + " ") ;
    //$(".songList").append("<p>" + song + "</p>")


//});
//artists.forEach(function(creator){
    //$(".artistList").append("<p>" + creator + "</p>")
//});
var input = $("inbox").val();
$(".button1")