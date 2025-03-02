document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (username && email && password) {
        document.getElementById("message").innerText = "Registration successful!";
        document.getElementById("message").style.color = "green";
        this.reset();
    } else {
        document.getElementById("message").innerText = "Please fill out all fields.";
        document.getElementById("message").style.color = "red";
    }
});