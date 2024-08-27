function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const toggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
}
