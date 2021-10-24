const musicContainer= document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');

const title = document.getElementById('title');
const cover = document.getElementById('cover');



//song titles

const songs=['aze','lelele', 'sehid'];

//keep track at song
let songIndex=2;


//Load song details into DOM
loadSong(songs[songIndex]);



//Update song details
function loadSong(song){
    title.innerText= song;
    audio.src = `music/${song}.mp3`;
    cover.src =`images/${song}.jpg`;
}

//Event listener

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying){
        playSong(); 
    }else{
         pauseSong();
    }
    
});

//play Song
function playSong(){
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();

}
//Pause Song

function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");


    audio.pause();
}

//previos song
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    
   playSong();
}
//previos song
function nextSong(){
    songIndex++;
    if (songIndex > songs.length -1 ){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    
   playSong();
}

//update progress bar

function updateProgress(e){
    const {duration,currenTime} = e.srcElement;
    const progressPercent = (currenTime / duration ) * 100;
    progress.style.width = '${progressPercent}%';

}
//Event listener

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

//Change song
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);

// time&Song update
audio.addEventListener("timeupdate", updateProgress);

//click on progress bar
progressContainer.addEventListener("click", setProgress);






 




