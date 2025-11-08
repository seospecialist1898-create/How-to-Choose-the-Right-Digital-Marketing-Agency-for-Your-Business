// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav ul');
    toggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Accordion
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            headers.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });
            if (!isActive) {
                header.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    // Parallax effect on hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animate steps on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    });

    document.querySelectorAll('.step-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(item);
    });

    // Scroll to top
    let scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-top';
    scrollBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--primary-teal);color:white;border:none;border-radius:50%;width:50px;height:50px;cursor:pointer;z-index:1000;display:none;';
    document.body.appendChild(scrollBtn);
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
});