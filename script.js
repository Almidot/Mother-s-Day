function playMusic() {
    const music =
    document.getElementById('music')
    music.play();
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.textContent = '🌸';

    // Random horizontal position
    petal.style.left = Math.random() * window.innerWidth + 'px';

    // Random animation duration
    petal.style.animationDuration = 4 + Math.random() * 3 + 's';

    document.getElementById('petals').appendChild(petal);

    // Remove petal after it falls
    setTimeout(() => {
        petal.remove();
    }, 7000);
}

// Create a new petal every 300ms
setInterval(createPetal, 300);


