
if(document.querySelector('.navbar')) {
document.querySelector('.navbar').addEventListener('click', function() {
    const header_menu = document.querySelector('nav')
    const header = document.querySelector('header');
    this.classList.toggle('close');
    header_menu.classList.toggle('active')
    header.classList.toggle('active')
});

}

if(document.querySelector('header')) {
function checkScroll() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', checkScroll);

}