document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
   // ตรวจสอบว่าหา element เจอก่อนจะเพิ่ม event
    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
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
// Video Player Functionality (Updated for Vimeo)
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        container.addEventListener('click', () => {
            const vimeoId = container.getAttribute('data-vimeo-id'); // <-- เปลี่ยนจาก youtube-id
            if (vimeoId) { // ตรวจสอบว่ามี vimeo-id จริงๆ
                const iframe = document.createElement('iframe');
                
                // ใช้ลิงก์สำหรับฝังของ Vimeo
                iframe.setAttribute('src', `https://player.vimeo.com/video/${vimeoId}?autoplay=1`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');

                container.innerHTML = '';
                container.appendChild(iframe);
            }
        });
    });
