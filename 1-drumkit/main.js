function playSound(evnt) {
    const audio = document.querySelector(`audio[data-key='${evnt.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${evnt.keyCode}']`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(evnt) {
    if (evnt.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
