let headerEl = document.getElementById("header");

if (localStorage.getItem("logged_in") === null) {
    localStorage.setItem("logged_in", "false");
};
if (localStorage.getItem("logged_in") === "false") {
    let indexloginbutton = document.createElement("button");
    indexloginbutton.setAttribute("id", "indexloginbutton");
    indexloginbutton.setAttribute("onclick", "login()");
    indexloginbutton.textContent = "Login";
    headerEl.appendChild(indexloginbutton);
} else if (localStorage.getItem("logged_in") === "true") {
    let loggedintext = document.createElement("p");
    let loggedinbutton = document.createElement("button");
    let loggedindiv = document.createElement("div");
    loggedintext.setAttribute("id", "loggedintext");
    loggedinbutton.setAttribute("id", "loggedinbutton");
    loggedindiv.setAttribute("id", "loggedindiv");
    loggedintext.textContent = "Logged in as: " + localStorage.getItem("account");
    loggedinbutton.textContent = "Log out";
    loggedinbutton.setAttribute("onclick", "logout()");
    loggedindiv.appendChild(loggedintext);
    loggedindiv.appendChild(loggedinbutton);
    headerEl.appendChild(loggedindiv);
} else {
    console.log("Could not get login status");
};
// Når man trykker på login-knappen
function login () {
    // Sender deg til login siden
    window.location.replace("login.html");
};
function logout() {
    localStorage.setItem("logged_in", "false");
    localStorage.removeItem("account");
    location.reload();
};