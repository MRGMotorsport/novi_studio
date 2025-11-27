document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-section'); // match your services wrapper

    const observerOptions = {
        root: null,           // viewport
        rootMargin: "0px",
        threshold: 0.1        // trigger when 10% is visible
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
