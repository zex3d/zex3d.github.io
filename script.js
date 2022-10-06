function id(id) { return document.getElementById(id) }

function hh() { document.querySelectorAll('#hh').style.display = 'none' } //hidden on click

// navigation bar code and active
function pid(Page_id) {
    var x = id('c-c').getElementsByTagName('section');
    for (i = 0; i < x.length; i++) {
        if (x[i].id === Page_id) {
            id(Page_id).scrollIntoView();
        }
    }
}

function nid(nav_id) {
    var y = id("h_nav").getElementsByTagName("a");
    for (i = 0; i < y.length; i++) {
        (y[i].id === nav_id) ? ((!id(nav_id).classList.contains("active")) ? id(nav_id).classList.add("active") : '') : id(y[i].id).classList.remove("active");
    }
}

function show(Page_id, nav_id) {
    pid(Page_id);
    openNav("close", "open", "100%")
    nid(nav_id);
    console.log('HOME')
}

//loading screen
var loader = id('loader');
var content = id('c-c');
function fire() {
    loader.classList.toggle('fade');
    content.classList.toggle('fade');
    loader.style.display = "none";
    content.style.display = "block";
}

// night dark and light mode preferance
function cool(y, mode) {
    for (i = 0; i < y.length; i++) {
        y[i].id === mode ? id(y[i].id).style.display = "block" : id(y[i].id).style.display = "none";
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
    console.log(links[index])
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);

//^mode switcher
var toggle = id("dark_link");
const y = id("dark_link").getElementsByTagName("svg");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

//default 
if (storedTheme) {
    storedTheme === "dark" ? cool(y, "moon") : cool(y, "sun")
}

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
const navht = document.querySelector('nav').offsetHeight;
documentElement.style.setProperty('--scrolltm', navht);

//mobile navigation for menu
function openNav(open, close, _) {
    id("h_nav").style.left = _;
    id(open).style.display = "none";
    id(close).style.display = "flex";
}

//time-Project
function time(id1) {
    id(id1).classList.toggle('active');
    var z = id('clcode').getElementsByTagName('span');
    var v = 0;
    var list = [];
    for (i = 0; i < z.length; i++) {
        (id(z[i].id).classList.contains('active')) ? list.push(z[i].id) : '';
    }
    const element = id('time').getElementsByClassName('container');
    for (j = 0; j < element.length; j++) {
        (element[j].classList.contains("right")) ? element[j].classList.remove('right') : '';
        (element[j].classList.contains("left")) ? element[j].classList.remove('left') : '';
        var flag = "F";
        const x = element[j].getElementsByClassName('content')[0].getAttribute("class").toString();
        for (i = 0; i < list.length; i++) {
            (x.includes(list[i])) ? flag = "T" : '';
        }
        if (flag === "T") {
            (element[j].style.display = "block");
            v += 1;
            (v % 2 == 0) ? element[j].classList.add("right") : element[j].classList.add("left");
        } else {
            (element[j].style.display = "none");
        }
    }
}

function expand(s, x) {
    const links = document.querySelectorAll(s);
    if (x == 'e' || x == 'c') {
        (x === 'e') ? links.forEach((link) => link.children[1].style.display = "block") : links.forEach((link) => link.children[1].style.display = "none");
    }
    else {
        if (links[x].children[1].style.display === "block") {
            links.forEach((link) => link.children[1].style.display = "none");
        } else {
            links.forEach((link) => link.children[1].style.display = "none");
            links[x].children[1].style.display = "block"
        }
    }
}

function ready() {
    id("btnhome").innerHTML = "GO TO HOME PAGE"
    id('loader').setAttribute("onclick", "fire()")
}

//home page
show("home","_home_link")