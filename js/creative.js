(function() {
    "use strict"; // Start of use strict

    // Smooth page scrolling feature for page scroll links
    document.querySelectorAll('a.page-scroll').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 50;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize Bootstrap Scrollspy
    const navbarElement = document.querySelector('.navbar-fixed-top');
    if (navbarElement) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.navbar-fixed-top',
            offset: 51
        });
    }

    // Closes the Responsive Menu on Menu Item Click
    document.querySelectorAll('.navbar-collapse ul li a').forEach(function(link) {
        link.addEventListener('click', function() {
            const toggleButton = document.querySelector('.navbar-toggle:not(.hidden)');
            if (toggleButton) {
                toggleButton.click();
            }
        });
    });

    // Responsive font sizing for main header
    function fitText(elements, fontSizeTarget) {
        elements.forEach(function(element) {
            const minFontSize = 30;
            const maxFontSize = 65;
            const minWidth = 320;
            const maxWidth = 1200;
            
            function resize() {
                const width = window.innerWidth;
                let fontSize = minFontSize + (width - minWidth) / (maxWidth - minWidth) * (maxFontSize - minFontSize);
                fontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize));
                element.style.fontSize = fontSize + 'px';
            }
            
            resize();
            window.addEventListener('resize', resize);
        });
    }
    
    fitText(document.querySelectorAll('h1'));

    // Offset for Main Navigation - make it sticky on scroll
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= 100) {
                mainNav.classList.add('affix');
            } else {
                mainNav.classList.remove('affix');
            }
        });
    }

    // Initialize WOW.js Scrolling Animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

})(); // End of use strict
