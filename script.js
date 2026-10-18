
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");
const loginButton = document.getElementById("loginButton");

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

showPassword.addEventListener("change", function () {
    if (showPassword.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!emailInput.checkValidity()) {
        showMessage("Please enter a valid email address.", "error");
        emailInput.focus();
        return;
    }

    if (password.length < 6) {
        showMessage("Password must contain at least 6 characters.", "error");
        passwordInput.focus();
        return;
    }

    loginButton.disabled = true;
    loginButton.textContent = "Checking...";

    showMessage(
        "Demo successful! No real login occurred. Your password was not saved.",
        "success"
    );

    loginButton.disabled = false;
    loginButton.textContent = "Sign in";
});

document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();

    showMessage(
        "Password recovery is not connected in this demo.",
        "error"
    );
});

document.getElementById("signupLink").addEventListener("click", function (event) {
    event.preventDefault();

    showMessage(
        "Account registration is not connected in this demo.",
        "error"
    );
});
