document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content-wrapper');

    const observerOptions = {
        root: null,           // viewport
        rootMargin: "0px",
        threshold: 0.1        // trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animate only once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
