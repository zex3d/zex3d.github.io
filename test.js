//loading screen
var loader = document.getElementById('loader');
var content = document.getElementById('container');

function ready() {
    loader.classList.toggle('fade');
    content.classList.toggle('fade');
    loader.style.display = "none";
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

// changeLinkState();
window.addEventListener('scroll', changeLinkState());

// navigation bar code and active
function pid(Page_id) {
    var x = document.getElementById("container").getElementsByClassName("one");
    for (i = 0; i < x.length; i++) {
        if (x[i].id === Page_id) {
            document.getElementById(Page_id).scrollIntoView();
        }
    }
}
// function nid(nav_id) {
//     var y = document.getElementById("h_nav").getElementsByTagName("a");
//     for (i = 0; i < y.length; i++) {
//         if (y[i].id === nav_id) {
//             if (!document.getElementById(nav_id).classList.contains("active")) {
//                 document.getElementById(nav_id).classList.add("active");
//             }
//         } else {
//             document.getElementById(y[i].id).classList.replace("active", "act");
//         }
//     }
// }
function show(Page_id, nav_id) {
    pid(Page_id);
    document.getElementById("h_nav").classList.toggle('fade')
    // nid(nav_id);
}
//home page-default page
show("home", "_home_link")