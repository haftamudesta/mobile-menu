const hambergur = document.querySelector('.allign');
const contactsMenu = document.querySelector('.contacts-menu');
const closes = document.querySelector('.close-menu');
const main = document.querySelector('.main');
const navlink = document.querySelectorAll('.navlinks');
const navContainer = document.querySelector('.nav-container');
hambergur.addEventListener('click', () => {
  hambergur.classList.toggle('close');
  closes.style.display = 'block';
  contactsMenu.classList.add('active');
  navContainer.style.height = '300px';
  main.style.opacity = '0';
  hambergur.style.display = 'none';
});
closes.addEventListener('click', () => {
  closes.classList.toggle('allign');
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  navContainer.style.height = '92px';
  contactsMenu.classList.remove('active');
  main.style.opacity = '1';
});
navlink.forEach((n) => n.addEventListener('click', () => {
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  main.style.opacity = '1';
  navContainer.style.height = '92px';
  contactsMenu.classList.toggle('active');
}));
