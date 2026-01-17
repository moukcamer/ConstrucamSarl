// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Apply animation to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Apply animation to product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Apply animation to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// Header shadow on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle (for future implementation)
function initMobileMenu() {
    if (window.innerWidth <= 768) {
        // Add mobile menu functionality here if needed
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Add animation delay to feature cards for staggered effect
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation delay to product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation delay to gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Handle window resize
window.addEventListener('resize', initMobileMenu);