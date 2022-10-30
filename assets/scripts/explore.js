// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('select');
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('name', voices[i].name);
      option.setAttribute('lang', voices[i].lang);
      voiceSelect.appendChild(option);
    }
  }
  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  const button = document.querySelector('button');
  const input = document.querySelector('textarea');
  const img = document.querySelector('img');

  button.addEventListener('click', (event)=>{
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('name');

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) utterThis.voice = voices[i];
    }

    synth.speak(utterThis);
    
    utterThis.addEventListener('start', (event)=>{
      img.src = "assets/images/smiling-open.png";
    })

    utterThis.addEventListener('end', (event)=>{
      img.src = "assets/images/smiling.png";
    })
  })
}