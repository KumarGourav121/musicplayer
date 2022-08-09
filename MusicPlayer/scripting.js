console.log('Welcome');

// Initialize the variables
let songIndex=0;
let audioElement=new Audio('SongsCollections/0/0.mp3');    // To store audio in JavaScript
let playicon=document.getElementById('playicon');
let timeplay=document.getElementById('soundbar');
let g=document.getElementById('gif');
let x=document.getElementById('sped');

let songs= [
    {Song: "Broken-Angel", 
     FilePath: "SongsCollections/0/0.mp3",
     coverPath: "SongsCollections/0/0.jpg"},
    
     {Song: "Ek-Villian", 
     FilePath: "SongsCollections/1/1.mp3",
      coverPath: "SongsCollections/1/1.jpg"},

      
    {Song: "Hard-2-Face-Reality",
    FilePath: "SongsCollections/2/2.mp3", 
    coverPath: "SongsCollections/2/2.jpg"},

    
    {Song: "Man Mera -Table No.21",
     FilePath: "SongsCollections/3/3.mp3",
      coverPath: "SongsCollections/3/3.jpg"},

      {Song: "Tujme Rab Dikhta hai", 
    FilePath: "SongsCollections/4/4.mp3",
     coverPath: "SongsCollections/4/4.jpg"},
     
    {Song: "Gali Gali me - KGF Chapter-1", 
    FilePath: "SongsCollections/5/5.mp3", 
    coverPath: "SongsCollections/KGF/5/5.jpg"},

    
    {Song: "Give Me Some Sunshine", 
    FilePath: "SongsCollections/6/6.mp3", 
    coverPath: "SongsCollections/6/6.jpg"},
    
    {Song: "Hale dill -Murder 2", 
    FilePath: "SongsCollections/7/7.mp3", 
    coverPath: "SongsCollections/7/7.jpg"},

    {Song: "Zara dill me de Jagah", 
    FilePath: "SongsCollections/8/8.mp3",
     coverPath: "SongsCollections/8/8.jpg"},

     
    {Song: "Teri Meri Prem Kahani",
    FilePath: "SongsCollections/9/9.mp3", 
    coverPath: "SongsCollections/9/9.jpg"},

    {Song: "Jane nhi denge tujhe -3 Idiots", 
    FilePath: "SongsCollections/10/10.mp3", 
    coverPath: "SongsCollections/10/10.jpg"}


    

]

//audioElement.play();                                         // To Play audio

//handle play/pause click
playicon.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    playicon.classList.remove('fa-play-circle');
    playicon.classList.add('fa-pause-circle');
    g.style.opacity=1;
   }
   else{
    audioElement.pause();
    playicon.classList.remove('fa-pause-circle');
    playicon.classList.add('fa-play-circle');
    g.style.opacity=0;

   }
   
}) 

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seeker
    progress=parseInt((audioElement.currentTime/audioElement.duration*100));
    timeplay.value=progress;
})             //listen to event (time change event of audio) when audio changes 

timeplay.addEventListener('change',()=>{
    audioElement.currentTime=timeplay.value*audioElement.duration/100;
})

const makeAllPlays =()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{           //To check play of ecah song
    element.addEventListener('click', (e)=>{                                       
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `SongsCollections/${songIndex}/${songIndex}.mp3`;
        SongName.innerText = songs[songIndex].Song;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        playicon.classList.remove('fa-play-circle');
        playicon.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    x=document.getElementById(songIndex)
    x.classList.remove('fa-pause-circle');
    x.classList.add('fa-play-circle');
    if(songIndex>=10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    y=document.getElementById(songIndex);
    y.classList.remove('fa-play-circle');
    y.classList.add('fa-pause-circle');
    audioElement.src = `SongsCollections/${songIndex}/${songIndex}.mp3`;
    SongName.innerText = songs[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    
    playicon.classList.remove('fa-play-circle');
    playicon.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    x=document.getElementById(songIndex)
    x.classList.remove('fa-pause-circle');
    x.classList.add('fa-play-circle');
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    y=document.getElementById(songIndex);
    y.classList.remove('fa-play-circle');
    y.classList.add('fa-pause-circle');
    audioElement.src = `SongsCollections/${songIndex}/${songIndex}.mp3`;
    SongName.innerText = songs[songIndex].Song;
    audioElement.currentTime = 0;
    audioElement.play();
    playicon.classList.remove('fa-play-circle');
    playicon.classList.add('fa-pause-circle');
})
x.addEventListener('click', ()=>{
    audioElement.playbackRate=document.getElementById('sped').value;  
})

