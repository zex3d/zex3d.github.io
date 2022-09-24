function id(id) {
    return document.getElementById(id)
}
// navigation bar code and active
function pid(Page_id) {
    var x = id("content-container").getElementsByClassName("one");
    for (i = 0; i < x.length; i++) {
        if (x[i].id === Page_id) {
            id(Page_id).scrollIntoView();
        }
    }
}
function nid(nav_id) {
    var y = id("h_nav").getElementsByTagName("a");
    for (i = 0; i < y.length; i++) {
        if (y[i].id === nav_id) {
            if (!id(nav_id).classList.contains("active")) {
                id(nav_id).classList.add("active");
            }
        } else {
            id(y[i].id).classList.replace("active", "act");
        }
    }
}
function show(Page_id, nav_id) {
    pid(Page_id);
    closeNav()
    nid(nav_id);
}

//home page
show("home", "_home_link")


//loading screen
var loader = id('loader');
var content = id('content-container');

function ready() {
    loader.classList.toggle('fade');
    content.classList.toggle('fade');
    loader.style.display = "none";
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
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);

//^mode switcher
var toggle = id("_dark_link");
const y = id("_dark_link").getElementsByTagName("svg");
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
const navht = document.querySelector('#header').offsetHeight;
documentElement.style.setProperty('--scrolltm', navht);

//mobile navigation for menu
function openNav() {
    id("h_nav").style.left = "0%";
    id("open").style.display = "none";
    id("close").style.display = "flex";
}

function closeNav() {
    id("h_nav").style.left = "100%";
    id("close").style.display = "none"; 3
    id("open").style.display = "flex";
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
        const x = element[j].getAttribute("class").toString();
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

function hidelist(x) {
    var o = id('list').getElementsByClassName('slist')
    for (i = 0; i < o.length; i++) {
        (i == x) ? ((o[i].children[1].style.display === "block") ? o[i].children[1].style.display = "none" : o[i].children[1].style.display = "block") : o[i].children[1].style.display = "none";
    }
}
//swipe function
let touchstartX = 0
let touchendX = 0
function chkdir() {
    (touchstartX > touchendX) ? alert('r') : alert('l')
        (touchstartX > touchendX) ? openNav() : closeNav()
}
document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})
document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    chkdir()
})