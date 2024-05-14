////____________________________________________________________________________________
//                            * Question No 40 *
//______________________________________________________________________________________
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Adele", "21"));
console.log(make_album("The beatkes", "Sgt. Pepper's Lonely Heart Club Band"));
console.log(make_album("Taylor Swift", "1989", 13));
////--------------------------------------------------------------------
// Result 40 = { artist: 'Adele', title: '21' }
//             {artist: 'The beatkes',
//              title: "Sgt. Pepper's Lonely Heart Club Band"}
//             { artist: 'Taylor Swift', title: '1989', tracks: 13 }
////--------------------------------------------------------------------
