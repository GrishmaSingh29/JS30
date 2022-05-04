(function(){
    const keysList = document.querySelectorAll('.key');
    keysList.forEach((key) => {
        key.addEventListener('transitionend', (e) => {
            if (e.propertyName == 'transform') {
                removeAnimation(key);
            }
        });
    });

    function playAudioFor(keyValue) {
        let keyPressed = document.querySelector(`div[data-key="${keyValue}"]`);
        let keyAudio = document.querySelector(`audio[data-key="${keyValue}"]`);
        if (keyPressed) {
            keyPressed.classList.add('playing');
        }
        if (keyAudio) {
            keyAudio.currentTime = 0;
            keyAudio.play();
        } else {
            return 'No audio available';
        }
    }

    function removeAnimation(key) {
        key.classList.remove('playing');
    }

    window.addEventListener('keyup', (e) => {
        playAudioFor(e.code);
    });
    
})();