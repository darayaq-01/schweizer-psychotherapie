document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('#hamburger-btn');
    const headerMenu = document.querySelector('#header-menu');
    
    if (!hamburgerBtn || !headerMenu) return;
    
    // Open/close menu
    const toggleMenu = () => {
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', (!isExpanded).toString());
        
        headerMenu.classList.toggle('is-active');
        document.body.classList.toggle('no-scroll');
        headerMenu.classList.toggle('hidden');
    };
    
    // Listen hamburge button
    hamburgerBtn.addEventListener('click', toggleMenu);
    
    // Close menu when click outside
    document.addEventListener('click', (event) => {
        const target = event.target;
        const isMenuActive = headerMenu.classList.contains('is-active');
        
        if (!isMenuActive) return;
        
        const clickedOutsideMenu = !headerMenu.contains(target);
        const clickedOutsideButton = !hamburgerBtn.contains(target);
        
        if (clickedOutsideMenu && clickedOutsideButton) {
            toggleMenu();
        }
    });
    
    // Close menu when press ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && headerMenu.classList.contains('is-active')) {
            toggleMenu();
        }
    });
});