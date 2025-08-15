// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js only on the home page
    const element = document.getElementById('element');
    if (element) {
        var typed = new Typed('#element', {
            strings: ['Web Development', 'App Development', 'AI Tools and many more'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // If the link points to another page, navigate to it
            if (targetId.includes('.html')) {
                window.location.href = targetId;
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
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

    // Download Resume button functionality
    const downloadBtn = document.querySelector('.btn:first-child');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.open('resume.pdf', '_blank');
        });
    }

    // GitHub button functionality
    const githubBtn = document.querySelector('.btn:last-child');
    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            window.open('https://github.com/yourusername', '_blank');
        });
    }

    // Contact form handling
    const contactForm = document.querySelector('.contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formObject);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Project links functionality
    const projectLinks = document.querySelectorAll('.projectLink');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your project URL here
            window.open(this.getAttribute('href'), '_blank');
        });
    });

    // Social media links functionality
    const socialLinks = document.querySelectorAll('.footer-third a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social media URLs here
            window.open(this.getAttribute('href'), '_blank');
        });
    });
}); 