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