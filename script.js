const hamburger = document.getElementById('hamberger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//--NAVBAR SCROLL EFFECT --

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        navbar.computedStyleMap.boxShadow = '04px 20px rgba(108, 99, 255, 0.15)';
    }else {
        navbar.computedStyleMap.boxShadow = 'none';
    }
    });

    //- SCROLL REVEAL ANIMATION --//

    const revealElements = document.querySelectorAll(
        '.skill-category, .project-card, .contact-card, .about-info .info-item'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isInteresting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease. transform 0.6s ease';
        revealObserver.observe(el);
    });

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
        }
    });
    navItems.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#${current}') {
            link.classList.add('active-link');
        }
    });
});


const roles = [
    'AI & ML Developer',
    'Python Developer',
    'Web Developer',
    'Final Year B.Tech Student'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingE1 = document.querySelector('.hero-title');

function type () {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingE1.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typingE1.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if(charIndex === 0){
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 100);
}
type();