console.log("Welcome To The Music Of World")

// Intializing Variables
let songIndex = 0;
let audio = new Audio('1.mp3');
let masterplay = document.getElementById("masterPlay");
let progressbar = document.getElementById("progressbar");

let playMusic1 = document.getElementsByClassName("playMusic1");

let playMusic3 = document.getElementsByClassName("playMusic3");
let playMusic4 = document.getElementsByClassName("playMusic4");
let playMusic5 = document.getElementsByClassName("playMusic5");

//  audio.play();

let songs = [
    {songName: "Ambient Technology", filePath: "/My Projects/Spotify Clone/1.mp3", coverPath: "/My Projects/Spotify Clone/song1.jpg"},
    {songName: "She Said", filePath: "/My Projects/Spotify Clone/2.mp3", coverPath: "/My Projects/Spotify Clone/song1.jpg"},
    {songName: "Digital Technology", filePath: "/My Projects/Spotify Clone/3.mp3", coverPath: "/My Projects/Spotify Clone/song1.jpg"},
    {songName: "Ambient Technology", filePath: "/My Projects/Spotify Clone/1.mp3", coverPath: "/My Projects/Spotify Clone/song1.jpg"},
    {songName: "Ambient Technology", filePath: "/My Projects/Spotify Clone/1.mp3", coverPath: "/My Projects/Spotify Clone/song1.jpg"}
]

// handle play/pause click

masterplay.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
    
})
//Listening to Events
audio.addEventListener('timeupdate', () =>{
    // upadating progressbar
    progress = parseInt((audio.currentTime/audio.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audio.currentTime = progressbar.value*audio.duration/100;

})

// second song
let newaudio = new Audio('2.mp3')
let playMusic2 = Array.from(document.getElementsByClassName("playMusic2"));
playMusic2.addEventListener('click', () =>{
    if(newaudio.paused || newaudio.currentTime<=0){
        newaudio.play();
        playMusic2.classList.remove('fa-play');
        playMusic2.classList.add('fa-pause');
    }
})