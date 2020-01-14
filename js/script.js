let songName = ['Pokemon Typing Adventure Boss Theme', 'Satori Maiden ~ 3rd Eye', 'Masked Dedede Theme', 'Hardware Store', 'Magnus von Grapple Theme', 'One Who Gets In Our Way', 'Battle on the Big Bridge', 'Faith is for the Transient People', 'Trap Factory', 'Skull Man Stage', 'Beauty is a Mad Mistress', 'Horsechestra STRONG Version'];
let songArtist = [];
let songLength = [];
let songUrl = [];

function addSong () {
    let song = $('.song').val();
    let artist = $('.artist').val();
    let length = $('.length').val();
    let link = $('.link').val();
    songName.push(song);
    songArtist.push(artist);
    songLength.push(length);
    songUrl.push(link);
    $(".s").empty();
    $(".a").empty();
    $(".le").empty();
    $(".li").empty();
    songName.forEach(function(song) {
        $('.s').append(`<li>${song}</li>`);
    })
    songArtist.forEach(function(artist) {
        $('.a').append(`<li>${artist}</li>`);
    })
    songLength.forEach(function(length) {
        $('.le').append(`<li>${length}</li>`);
    })
    songUrl.forEach(function(link) {
        $('.li').append(`<li><a href="${link}"></a></li>`);
    })
}

$('.add').click(function() {
    addSong();
});