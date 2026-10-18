const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");

showPassword.addEventListener("change", function () {
    password.type = this.checked ? "text" : "password";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent =
        "Form validation successful! Demo only; no real login occurred.";
    message.style.color = "green";
});
