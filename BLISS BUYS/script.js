function login() {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    // Check if email and password match
    if (emailInput === "japleen@gmail.com" && passwordInput === "japleen") {
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}