let headerEl = document.getElementById("header");
let cookieEl = document.cookie;
let cookieName = "logged_in";
let cookieArray;

function getCookie(cookieName) {
    const name = cookieName + "=";
    const cookieDecoded = decodeURIComponent(document.cookie);
    cookieArray = cookieDecoded.split('; ')
    let res;
    cookieArray.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}
console.log(cookieArray)

// if ( === "no") {
//     let indexloginbutton = document.createElement("button");
//     indexloginbutton.setAttribute("id", "indexloginbutton");
//     indexloginbutton.setAttribute("onclick", "login()");
//     indexloginbutton.textContent = "Login";
//     headerEl.appendChild(indexloginbutton);
// } else if (sessionStorage.getItem("logged_in") == "yes") {
//     let loggedintext = document.createElement("p");
//     let loggedinbutton = document.createElement("button");
//     let loggedindiv = document.createElement("div");
//     loggedintext.setAttribute("id", "loggedintext");
//     loggedinbutton.setAttribute("id", "loggedinbutton");
//     loggedindiv.setAttribute("id", "loggedindiv");
//     loggedintext.textContent = "Logged in as: " + sessionStorage.getItem("account");
//     loggedinbutton.textContent = "Log out";
//     loggedinbutton.setAttribute("onclick", "logout()");
//     loggedindiv.appendChild(loggedintext);
//     loggedindiv.appendChild(loggedinbutton);
//     headerEl.appendChild(loggedindiv);
// } else {
//     console.log("Could not get login status");
// };

function login () {
    // Sender deg til login siden
    window.location.replace("login.html");
};
function logout() {
    sessionStorage.setItem("logged_in", "no")
    sessionStorage.removeItem("user")
};