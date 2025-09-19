document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
