document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hamburger Menu (New Accordion Style) ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const submenuItems = document.querySelectorAll('.has-submenu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    // Open menu with hamburger icon
    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    // Close menu with 'X' button
    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Accordion functionality for submenus
    submenuItems.forEach((item) => {
        const link = item.querySelector('a');
        link.addEventListener('click', (e) => {
            // Prevent parent link from navigating
            e.preventDefault();
            // Toggle the .open class on the parent li.has-submenu
            item.classList.toggle('open');
        });
    });

    // Close mobile menu when a regular link (not a submenu parent) is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is inside a submenu or is not a submenu parent
            if (!link.closest('.has-submenu') || link.closest('.submenu')) {
                mobileMenu.classList.remove('active');
            }
        });
    });


    // --- Scroll-to-Top Button (No changes needed) ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    // Check if the button exists on the page
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


    // --- Video Player Functionality (No changes needed) ---
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        container.addEventListener('click', () => {
            const youtubeId = container.getAttribute('data-youtube-id');
            const iframe = document.createElement('iframe');
            
            iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');

            container.innerHTML = '';
            container.appendChild(iframe);
        });
    });

});
