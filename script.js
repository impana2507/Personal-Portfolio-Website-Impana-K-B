// Page Switching
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId);
        updateActiveNav(sectionId);
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Typewriter Effect
const typewriterText = document.getElementById('typewriter-text');
const phrases = ['Data Analyst', 'Full Stack Developer', 'Machine Learning Enthusiast'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 100 : 200;
    setTimeout(typeWriter, speed);
}

typeWriter();

// Project Modals
const projectDetails = {
    sentiment: {
        title: 'Sentiment Analysis',
        description: 'Built using Python with ML algorithms (92–93% accuracy). Developed at Vacron Technology.',
        link: 'https://github.com/impana2507' // Placeholder
    },
    dashboards: {
        title: 'Data Visualization Dashboards',
        description: 'Built multiple dashboards and reports using Power BI, Tableau, and Excel (Shopify & Pizza Store Data). Developed at Cravita Technology.',
        link: 'https://github.com/impana2507' // Placeholder
    },
    billing: {
        title: 'Retail Billing System',
        description: 'Developed using Java Full Stack technologies. Built at Take It Smart.',
        link: 'https://github.com/impana2507' // Placeholder
    }
};

document.querySelectorAll('.project-card button').forEach(button => {
    button.addEventListener('click', () => {
        const project = button.parentElement.getAttribute('data-project');
        const details = projectDetails[project];
        document.getElementById('modal-title').textContent = details.title;
        document.getElementById('modal-description').textContent = details.description;
        document.getElementById('modal-link').href = details.link;
        document.getElementById('project-modal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = 'none';
    }
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Scroll to Top
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Wrap Letters for Color Alternation
function wrapLetters() {
    const elements = document.querySelectorAll('h1, h2, h3');
    elements.forEach(element => {
        const text = element.textContent;
        let wrappedText = '';
        if (element.classList.contains('name')) {
            // All pink for name
            for (let char of text) {
                if (char === ' ') {
                    wrappedText += ' ';
                } else {
                    wrappedText += `<span class="letter-pink">${char}</span>`;
                }
            }
        } else if (element.classList.contains('title')) {
            // All blue for title
            for (let char of text) {
                if (char === ' ') {
                    wrappedText += ' ';
                } else {
                    wrappedText += `<span class="letter-blue">${char}</span>`;
                }
            }
        } else {
            // All pink for other headlines
            for (let char of text) {
                if (char === ' ') {
                    wrappedText += ' ';
                } else {
                    wrappedText += `<span class="letter-pink">${char}</span>`;
                }
            }
        }
        element.innerHTML = wrappedText;
    });
}

// Call wrapLetters on load
document.addEventListener('DOMContentLoaded', wrapLetters);

// Animate Progress Bars on Skills Section
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.progress').forEach(progress => {
                const width = progress.style.width;
                progress.style.setProperty('--progress-width', width);
                progress.style.width = '0';
                setTimeout(() => {
                    progress.style.width = width;
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);
