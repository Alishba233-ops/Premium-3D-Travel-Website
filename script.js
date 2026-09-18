// WanderAura Travels - JavaScript

function showWelcome() {
    alert("Welcome to WanderAura Travels! 🌍");
}

console.log("WanderAura JavaScript is working!");
function submitBooking() {
    const name = document.querySelector(
        '.booking-box input[type="text"]'
    ).value.trim();

    const email = document.querySelector(
        '.booking-box input[type="email"]'
    ).value.trim();

    const destination = document.querySelector(
        '.booking-box select'
    ).value;

    const date = document.querySelector(
        '.booking-box input[type="date"]'
    ).value;

    if (name === "" || email === "" || destination === "Select Destination" || date === "") {
        alert("Please fill in all booking details.");
        return;
    }

    alert(
        `Thank you ${name}! Your trip to ${destination} has been requested.`
    );

    closeBooking();
}
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const message = contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all contact details.");
        return;
    }

    alert(`Thank you ${name}! Your message has been received.`);

    contactForm.reset();
});
function selectDestination(destination) {
    alert(
        `Great choice! 🌍 You selected ${destination}.`
    );
}