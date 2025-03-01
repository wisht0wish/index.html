document.addEventListener("DOMContentLoaded", function () {
    // Animate sections on scroll
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Form validation and submission
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "All fields are required!";
        } else {
            formMessage.style.color = "green";
            formMessage.textContent = "Message sent successfully!";
            form.reset();
        }
    });
});
