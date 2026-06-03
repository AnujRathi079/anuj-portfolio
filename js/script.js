// =====================
// LOADER
// =====================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.6s";
    }, 1200);
});

// =====================
// TYPING EFFECT
// =====================

const typingElement = document.querySelector(".typing");

const professions = [
    "Full Stack Developer",
    "React Developer",
    "AI Enthusiast",
    "Frontend Developer",
    "Problem Solver"
];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = professions[professionIndex];

    if (!deleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            professionIndex++;

            if (professionIndex >= professions.length) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


// =====================
// DARK / LIGHT MODE
// =====================

const themeToggle =
    document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains("light-mode")
    ) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});


// =====================
// SCROLL PROGRESS BAR
// =====================

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progressBar"
    ).style.width = progress + "%";

});


// =====================
// ACTIVE NAV LINK
// =====================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });

});


// =====================
// FADE IN ANIMATION
// =====================

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show"
                );

            }

        });

    }, {
        threshold: 0.15
    });

document
    .querySelectorAll(
        ".stat-card, .skill-card, .project-card, .timeline-item"
    )
    .forEach(el => {

        el.classList.add("hidden");
        observer.observe(el);

    });


// =====================
// SMOOTH BUTTON EFFECT
// =====================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "translateY(0) scale(1)";

    });

});


// =====================
// BACK TO TOP BUTTON
// =====================

const backTop =
    document.createElement("button");

backTop.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

backTop.id = "backTop";

document.body.appendChild(backTop);

backTop.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00f5d4;
color:#000;
font-size:18px;
cursor:pointer;
display:none;
z-index:999;
font-weight:bold;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================
// EMAILJS CONTACT FORM
// =====================

emailjs.init("1wchLx6WIe6KNUrYf");

document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xpnkns7",
                "template_ujw9er",
                this
            )
            .then(() => {
                alert("Message Sent Successfully!");
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message");
            });
    });


const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});