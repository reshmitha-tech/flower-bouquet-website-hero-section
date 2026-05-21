document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('animationContainer');
    
    // We'll create a mix of flowers and petals
    const numberOfFlowers = 5; 
    const numberOfPetals = 15;

    for (let i = 0; i < numberOfFlowers; i++) {
        createFloralElement(container, 'flower.png', true);
    }
    
    for (let i = 0; i < numberOfPetals; i++) {
        createFloralElement(container, 'petal.png', false);
    }
});

function createFloralElement(container, imageSrc, isFlower) {
    const el = document.createElement('img');
    el.src = imageSrc;
    el.classList.add('petal');
    
    if (isFlower) {
        el.classList.add('is-flower');
    }

    // Randomize properties for an organic feel
    // Flowers are slightly larger than petals
    const size = isFlower ? (Math.random() * 40 + 60) : (Math.random() * 30 + 20);
    const startX = Math.random() * 95; // 0% to 95%
    const startY = Math.random() * 95; // 0% to 95%
    const animDuration = Math.random() * 8 + 6; // 6s to 14s duration
    const animDelay = Math.random() * 4; // 0s to 4s delay
    const rotation = Math.random() * 360; // Initial random rotation

    // Apply styles to position and animate
    el.style.width = `${size}px`;
    el.style.height = 'auto';
    el.style.left = `${startX}%`;
    el.style.top = `${startY}%`;
    el.style.transform = `rotate(${rotation}deg)`;
    el.style.setProperty('--duration', `${animDuration}s`);
    el.style.animationDelay = `${animDelay}s`;
    
    container.appendChild(el);
}
