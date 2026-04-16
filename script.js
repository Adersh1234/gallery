// ==========================================
// Ve - Landing Page Scripts
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile menu toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- Scroll Animations ---
    const fadeTargets = document.querySelectorAll(
        '.step-card, .feature-card, .pain-point, .persona-card, .privacy-card, .proof-quote, .faq-item, .section-label, .section-heading, .cta-content, .problem-closing'
    );

    fadeTargets.forEach(el => el.classList.add('fade-target'));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px 0px 0px'
        });

        fadeTargets.forEach(el => observer.observe(el));

        // Fallback: reveal elements already in viewport on load
        setTimeout(() => {
            fadeTargets.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                }
            });
        }, 100);
    } else {
        fadeTargets.forEach(el => el.classList.add('visible'));
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (navLinks) navLinks.classList.remove('mobile-open');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
        });
    });
});
