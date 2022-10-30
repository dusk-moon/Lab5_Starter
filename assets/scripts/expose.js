// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const confetti = new JSConfetti();
  const audio = document.querySelector('audio');
  audio.controls = true;

  const hornSelect = document.getElementById('horn-select');
  const img1 = document.querySelectorAll('img')[0];
  hornSelect.addEventListener('change', (event)=>{
    if (hornSelect.value == 'air-horn') {
      img1.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }
    if (hornSelect.value == 'car-horn') {
      img1.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    if (hornSelect.value == 'party-horn') {
      img1.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  })

  const volumeControl = document.querySelector('input');
  const img2 = document.querySelectorAll('img')[1];
  volumeControl.addEventListener('input', (event)=>{
    audio.volume = volumeControl.value / 100;
    if (volumeControl.value == 0) img2.src = 'assets/icons/volume-level-0.svg';
    else if (volumeControl.value < 33) img2.src = 'assets/icons/volume-level-1.svg';
    else if (volumeControl.value < 67) img2.src = 'assets/icons/volume-level-2.svg';
    else img2.src = 'assets/icons/volume-level-3.svg';
  })

  const button = document.querySelector('button');
  button.addEventListener('click', (event)=>{
    if (hornSelect.value != 'select') {
      if (hornSelect.value == 'party-horn') confetti.addConfetti();
      audio.play();
    }
  })
}