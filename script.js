document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hamburger Menu (Simple Version) ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // --- Scroll-to-Top Button ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
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
    }

    // --- Video Player Functionality (Vimeo) ---
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        container.addEventListener('click', () => {
            const vimeoId = container.getAttribute('data-vimeo-id');
            if (vimeoId) {
                const iframe = document.createElement('iframe');
                
                iframe.setAttribute('src', `https://player.vimeo.com/video/${vimeoId}?autoplay=1`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');

                container.innerHTML = '';
                container.appendChild(iframe);
            }
        });
    });

});
