// navigation bar code and active(old)
// function show(Page_id, nav_id) {
//     var x = document.getElementById("content-container").getElementsByClassName("one");
//     var y = document.getElementById("h_nav").getElementsByTagName("a")
//     for (i = 0; i < x.length; i++) {
//         if (x[i].id === Page_id) {
//             document.getElementById(Page_id).style.display = "block";

//         } else {

//             document.getElementById(x[i].id).style.display = "none";
//         }
//     }
//     document.getElementById("h_nav").classList.toggle('fade')
//     for (i = 0; i < y.length; i++) {
//         if (y[i].id === nav_id) {
//             if (!document.getElementById(nav_id).classList.contains("active")) {
//                 document.getElementById(nav_id).classList.add("active")
//             }
//         } else {
//             document.getElementById(y[i].id).classList.replace("active", "act")
//         }
//     }
// }

// new scroll
// function scrolldiv() {
//     var elem = document.getElementById("home");
//     elem.scrollIntoView();
// }


// navigation bar code and active
function pid(Page_id) {
    var x = document.getElementById("content-container").getElementsByClassName("one");
    for (i = 0; i < x.length; i++) {
        if (x[i].id === Page_id) {
            document.getElementById(Page_id).scrollIntoView();
        }
    }
}
function nid(nav_id) {
    var y = document.getElementById("h_nav").getElementsByTagName("a");
    for (i = 0; i < y.length; i++) {
        if (y[i].id === nav_id) {
            if (!document.getElementById(nav_id).classList.contains("active")) {
                document.getElementById(nav_id).classList.add("active");
                console.log(nav_id);
            }
        } else {
            document.getElementById(y[i].id).classList.replace("active", "act");
        }
    }
}
function show(Page_id, nav_id) {
    pid(Page_id);
    document.getElementById("h_nav").classList.toggle('fade')
    nid(nav_id);
}
//mobile navigation
var toggle1 = document.getElementById("id3");
toggle1.onclick = function () {
    document.getElementById("h_nav").classList.toggle('fade');
}
//home page
show("home", "_home_link")

//loading screen
var loader = document.getElementById('loader');
var content = document.getElementById('content-container');

function ready() {
    loader.classList.toggle('fade');
    content.classList.toggle('fade');
    loader.style.display = "none";
}
// night dark and light mode preferance
var toggle = document.getElementById("_dark_link");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)
toggle.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
}
//new dynamic padding while scrolling
const navht=document.querySelector('#header').offsetHeight;
console.log(navht);
documentElement.style.setProperty('--scrolltm',navht);