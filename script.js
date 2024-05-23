console.log("Welcome to Sportify");
//Initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems =  Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"samat aayi hai", filePath:"songs/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"kaho kaise rasta", filePath:"songs/2.mp3", coverPath:"cover/2.jpg"},
    {songName:"To jo Mujhe Na Mili", filePath:"songs/3.mp3", coverPath:"cover/3.jpg"},
    {songName:"Bol Na Halke Halke", filePath:"songs/4.mp3", coverPath:"cover/4.jpg"},
    {songName:"Tarsti Hai Nigahan", filePath:"songs/5.mp3", coverPath:"cover/5.jpg"},
    {songName:"Bepanah Ishq", filePath:"songs/6.mp3", coverPath:"cover/6.jpg"},
    {songName:"Lut Gaye", filePath:"songs/7.mp3", coverPath:"cover/7.jpg"},
    {songName:"Tujhe Kitna chahne Lage", filePath:"songs/8.mp3", coverPath:"cover/8.jpg"},
    {songName:"Baarish Ban Jana", filePath:"songs/9.mp3", coverPath:"cover/9.jpg"},
    {songName:"To Hai Ki Nahi", filePath:"songs/10.mp3", coverPath:"cover/10.jpg"}
]
songItems.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();


//Handle play/push click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-paush');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-paush');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt( e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src =`songs/${songIndex+1}.mp3`;
   masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex =0;
    }
else{
    songIndex +=1;
}
audioElement.src =`songs/${songIndex +1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
else{
    songIndex -=1;
}
audioElement.src =`songs/${songIndex +1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})