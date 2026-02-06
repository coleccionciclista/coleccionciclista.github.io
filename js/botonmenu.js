const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

function checkWidth() {
  if (window.innerWidth == 200) {
    menuBtn.style.display = 'block';
    nav.style.display = 'none';
  } else {
    menuBtn.style.display = 'none';
    nav.style.display = 'flex';
  }
}


menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');

});




