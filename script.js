'use strict';

//* Navbar Links -
const navLinks = document.querySelectorAll('nav li a');
navLinks.forEach((link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
        link.style.textDecorationThickness = '2px';
        link.style.textUnderlineOffset = '5px';
        link.style.opacity = '0.7';
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
        link.style.opacity = '1';
    });
}));


//* Theme Toggle switch
const themeToggle = document.querySelectorAll('label .sun-moon');
const bodyPage = document.querySelector('body');
let currentPage = localStorage.getItem('mode') || 'dark';
bodyPage.classList.add(currentPage);
themeToggle.forEach((theme => {
    theme.addEventListener('click', () => {
        currentPage = currentPage === 'dark' ? 'light' : 'dark';
        bodyPage.classList.toggle('dark', currentPage === 'dark');
        bodyPage.classList.toggle('light', currentPage === 'light');
        localStorage.setItem('mode', currentPage);
    }, false);
}));


//* Clickable each Section by Navbar links-
document.querySelectorAll('nav li a').forEach((link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetId) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }, false);
}));


//* Social Links-
const socialLinks = document.querySelectorAll('.wrapper li a');
socialLinks.forEach((link => {
    link.addEventListener('click', () => {
        if (link.querySelector('.fa-github')) {
            window.open('https://github.com/raushan620300', '_blank');
        } else if (link.querySelector('.fa-linkedin')) {
            window.open('https://www.linkedin.com/in/raushan-sinha-4b94452a1/', '_blank');
        } else if (link.querySelector('.fa-x-twitter')) {
            window.open('https://x.com/84Raushan', '_blank');
        } else if (link.querySelector('.fa-dev')) {
            window.open('https://dev.to/raushan_sinha_8efb05c7b1c', '_blank');
        } else if (link.querySelector('.fa-instagram')) {
            window.open('https://www.instagram.com/raushan_sinha02/?hl=en', '_blank');
        }
    });
}));


//* All Projects links-
const projectsLink = document.querySelectorAll('article .card');
projectsLink.forEach((link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.querySelector('#project-1')) {
            window.open('', '_blank');
        } else if (link.querySelector('#project-2')) {
            window.open('', '_blank');
        } else if (link.querySelector('#project-3')) {
            window.open('', '_blank');
        } else if (link.querySelector('#project-4')) {
            window.open('', '_blank');
        }
    }, false);
}));

//* Blog Cards Link-
const blogCards = document.querySelectorAll('#blog .blog-cards');
blogCards.forEach((link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.querySelector('#blogCard1')) {
            window.open('', '_blank');
        } else if (link.querySelector('#blogCard2')) {
            window.open('', '_blank');
        } else if (link.querySelector('#blogCard3')) {
            window.open('', '_blank');
        } else if (link.querySelector('#blogCard4')) {
            window.open('', '_blank');
        }
    }, false)
}))


//* Contact Links-
const contactLinks = document.querySelectorAll('section .social-buttons-container button');
contactLinks.forEach((link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.querySelector('.fa-instagram')) {
            window.open('https://www.instagram.com/raushan_sinha02/?hl=en', '_blank');
        } else if (link.querySelector('.fa-envelope')) {
            window.open('mailto:raushankrsinha2004@gmailcom', '_blank');
        } else if (link.querySelector('.fa-phone')) {
            window.open('tel:+916203004345', '_blank');
        }
    }, false);
}))


//* FAQ section-
document.querySelectorAll('#faq .faq-question').forEach((item => {
    const answer = item.nextElementSibling;
    const icon = item.querySelector('.faq-icon');
    item.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-plus');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-xmark');
        }
    }, false);
}));


//* Footer Social Links-
document.querySelectorAll('footer a').forEach((link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.querySelector('.fa-instagram')) {
            window.open('https://www.instagram.com/raushan_sinha02/?hl=en', '_blank');
        } else if (link.querySelector('.fa-x-twitter')) {
            window.open('https://x.com/84Raushan', '_blank');
        } else if (link.querySelector('.fa-linkedin')) {
            window.open('https://www.linkedin.com/in/raushan-sinha-4b94452a1/', '_blank');
        }
    }, false)
}))