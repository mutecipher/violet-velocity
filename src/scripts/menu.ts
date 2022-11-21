const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (navLinks) {
      navLinks.classList.toggle('expanded');
    }
  });
}

export { };
