const menu = document.querySelector('.hamburger');

const navLink = document.querySelector('.mob-nav-list');

const close = document.querySelector('.close-icon');

const lists = document.querySelectorAll('.mob-nav-list li');

menu.addEventListener('click', () => {
  navLink.style.marginLeft = 0;
});

close.addEventListener('click', () => {
  navLink.style.marginLeft = '-1000px';
});

lists.forEach((list)=>{
  list.addEventListener('click', () => {
    navLink.style.marginLeft = '-1000px';
  });
});
