let usernameEl = document.getElementById("usernameid");
let passwordEl = document.getElementById("passwordid");
let loginwindowel = document.getElementById("loginwindow");
let loginresult = document.createElement("p");

loginresult.setAttribute("id", "loginresult");

function submitlogin() {
    if (usernameEl.value === "badositt") {
        if (passwordEl.value === "123") {
            loginresult.textContent = "Logger inn...";
            localStorage.setItem("logged_in", "true");
            localStorage.setItem("account", usernameEl.value)
            window.location.replace("index.html");
        } else {
            loginresult.textContent = "Feil passord";
        };
    } else {
        loginresult.textContent = "Feil brukernavn eller passord";
    };
    loginwindowel.appendChild(loginresult);
};

function nybruker () {
    window.location.replace("registrer.html")
};

if (window.location.pathname == 'index.html') {
    
}

// Når man trykker på login-knappen
