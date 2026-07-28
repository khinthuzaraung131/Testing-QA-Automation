// Login function
function login(username, password) {
    return username === "admin" && password === "12345";
}

// Browser code
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = login(username, password);

        document.getElementById("result").textContent =
            result ? "Login Successful!" : "Invalid Username or Password";
    });
}

// Export for Jest
if (typeof module !== "undefined") {
    module.exports = login;
}
