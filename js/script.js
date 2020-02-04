let song1 = {
    name: 'Native Faith',
    artist: 'ZUN',
    length: '5:43',
    link: 'https://youtu.be/P7dLp2Eb7cg',
}

let song2 = {
    name: 'Hardware Store',
    artist: 'Weird Al Yankovic',
    length: '3:44',
    link: 'https://youtu.be/_t6hagxzSdw',
}

let song3 = {
    name: 'Horsechestra STRONG Version',
    artist: 'Alexander Rosetti',
    length: '3:25',
    link: 'https://youtu.be/HHlaLTjv4So',
}

let song4 = {
    name: 'One Who Gets in Our Way',
    artist: 'ACE+',
    length: '3:20',
    link: 'https://youtu.be/-Xl3LF5A2lk',
}

let song5 = {
    name: 'Faith is for the Transient People',
    artist: 'ZUN',
    length: '5:45',
    link: 'https://youtu.be/q4gqGhN0xnE',
}

let songArray = [song1, song2, song3, song4, song5];

songArray.forEach(function(song) {
    $('.s').append(`<li>${song.name}</li>`);
    $('.a').append(`<li>${song.artist}</li>`);
    $('.le').append(`<li>${song.length}</li>`);
    $('.li').append(`<li><a href="${song.link}">link</a></li>`);
})

function addSong () {
   let song = $('.song').val();
   $('.song').val('');
   let artist = $('.artist').val();
   $('.artist').val('');
   let length = $('.length').val();
   $('.length').val('');
   let link = $('.link').val();
   $('.link').val('');
   songArray.push({name:song, artist:artist, length:length, link:link})
//     songName.push(song);
//     songArtist.push(artist);
//     songLength.push(length);
//     songUrl.push(link);
    songArray.forEach(function(song) {
        $('.s').append(`<li>${song.name}</li>`);
        $('.a').append(`<li>${song.artist}</li>`);
        $('.le').append(`<li>${song.length}</li>`);
        $('.li').append(`<li><a href="${song.link}">link</a></li>`);
    })
}

$('.add').click(function() {
    $(".s").empty();
    $(".a").empty();
    $(".le").empty();
    $(".li").empty();
    addSong();
});