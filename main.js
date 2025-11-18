// Password protection
document.getElementById('unlock').addEventListener('click', tryUnlock);
document.getElementById('pwd').addEventListener('keyup', function(e){ if(e.key==='Enter') tryUnlock(); });

function tryUnlock(){
  const val = document.getElementById('pwd').value;
  if(val === 'suha1220'){
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
  } else {
    const err = document.getElementById('pwd-error');
    err.innerText = 'Wrong password — try again';
    setTimeout(()=>err.innerText='',2000);
  }
}

// Music play button
const playBtn = document.getElementById('play');
const audio = document.getElementById('bg');
playBtn.addEventListener('click', function(){
  if(audio.paused){
    audio.play();
    playBtn.innerText = 'Pause Music';
  } else {
    audio.pause();
    playBtn.innerText = 'Play Music';
  }
});

// small accessibility: focus to password input
document.getElementById('pwd').focus();
