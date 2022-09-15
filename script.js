
const y = document.getElementById("_dark_link").getElementsByTagName("svg");
const menu = document.getElementById("id3").getElementsByTagName("path");// navigation bar code and active
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
            }
        } else {
            document.getElementById(y[i].id).classList.replace("active", "act");
        }
    }
}
function show(Page_id, nav_id) {
    pid(Page_id);
    document.getElementById("h_nav").classList.toggle('fade')
    cool(menu, "show")
    nid(nav_id);
}
//mobile navigation for menu
var toggle1 = document.getElementById("id3");
toggle1.onclick = function () {
    var x = document.getElementById("h_nav")
    x.classList.toggle('fade');
    //toggle svgs for menu
    if (document.getElementById("hide").style.display == "none") {
        cool(menu, "hide");
    }
    else {
        cool(menu, "show");
    }
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
function cool(y, mode) {
    for (i = 0; i < y.length; i++) {
        (y[i].id === mode) ?
            document.getElementById(y[i].id).style.display = "block" : document.getElementById(y[i].id).style.display = "none";
    }
}
//scroll active setting up 
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');
function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);
//^mode switcher
var toggle = document.getElementById("_dark_link");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//default 
if (storedTheme) {
    (storedTheme === "dark") ? cool(y, "moon") : cool(y, "sun")
}

// cool(menu, "show")
//toggle
document.documentElement.setAttribute('data-theme', storedTheme)
toggle.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    if (currentTheme === "light") {
        targetTheme = "dark";
        cool(y, "moon")
    } else {
        cool(y, "sun")
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
}
//new dynamic padding while scrolling
const navht = document.querySelector('#header').offsetHeight;
// documentElement.style.setProperty('--scrolltm', navht);