document.addEventListener("DOMContentLoaded", () => {
    // 1. Loading Animation
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
        }, 500); // Small delay to let animations sync
    });

    // 2. Navbar Scroll Effect & Active Link highlighting
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // keep scrolled for consistent glassmorphism or toggle
            if(window.scrollY === 0) navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Floating Floral Background Animations (Hero Section)
    const container = document.getElementById('animationContainer');
    
    // We'll create a mix of flowers and petals
    const numberOfFlowers = 5; 
    const numberOfPetals = 12;

    if (container) {
        for (let i = 0; i < numberOfFlowers; i++) {
            createFloralElement(container, 'flower.png', true);
        }
        
        for (let i = 0; i < numberOfPetals; i++) {
            createFloralElement(container, 'petal.png', false);
        }
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
    const size = isFlower ? (Math.random() * 40 + 60) : (Math.random() * 30 + 20);
    const startX = Math.random() * 95; 
    const startY = Math.random() * 95; 
    const animDuration = Math.random() * 8 + 6; // 6s to 14s
    const animDelay = Math.random() * 4; 
    const rotation = Math.random() * 360; 

    el.style.width = `${size}px`;
    el.style.height = 'auto';
    el.style.left = `${startX}%`;
    el.style.top = `${startY}%`;
    el.style.transform = `rotate(${rotation}deg)`;
    el.style.setProperty('--duration', `${animDuration}s`);
    el.style.animationDelay = `${animDelay}s`;
    
    container.appendChild(el);
}
