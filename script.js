document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var lastScrollTop = 0;

    function showSection(sectionId) {
        sections.forEach(function (section) {
            section.classList.remove('show');
            if (section.id === sectionId) {
                setTimeout(() => section.classList.add('show'), 100);
            }
        });
    }

    function handleNavClick(event) {
        event.preventDefault();
        var sectionId = event.target.getAttribute('href').substring(1);
        showSection(sectionId);
    }

    function handleScroll() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.clientHeight;

        if (scrollPosition > lastScrollTop && scrollPosition + windowHeight >= bodyHeight) {
            header.style.top = '-80px';
            footer.style.opacity = 1;
        } else {
            header.style.top = '0';
            footer.style.opacity = 0;
        }

        lastScrollTop = scrollPosition;
    }

    showSection('Introducción');

    window.addEventListener('scroll', handleScroll);
    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavClick);
    });
});
