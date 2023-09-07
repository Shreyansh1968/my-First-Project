console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Peace", filePath: "songs/1.mp3", coverPath: "imgg.jpg.jpg"},
    {songName: "Cradles", filePath: "songs/2.mp3", coverPath: "mc1.webp"},
    {songName: "Sway", filePath: "songs/3.mp3", coverPath: "mc7.webp"},
    {songName: "Somebody that I use to Know", filePath: "songs/4.mp3", coverPath: "mc2.jpg"},
    {songName: "I want to break free", filePath: "songs/5.mp3", coverPath: "mc5.jpg"},
]

songItem.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
} 
else{
audioElement.pause();
masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
}
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgress.value = progress;
})

myProgress.addEventListener('change', ()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
}) 
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');

})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=4){
    songIndex = 0
}
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText= songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
if(songIndex<=0){
    songIndex = 0
} 
else{
    songIndex -= 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText= songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})




