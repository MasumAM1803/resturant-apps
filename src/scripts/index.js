import 'regenerator-runtime'; /* for async await transpile */
import '../styles/scss/main.scss';
import './components/index';

// Import javascript file as needed
import Home from './pages/home';
import Detail from './pages/detail';

const routes = {
  '/': Home,
  '/pages/detail.html': Detail,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  const menu = document.querySelector('#menu');
  // const hero = document.querySelector('.hero');
  const main = document.querySelector('main');
  const drawer = document.querySelector('#drawer');

  initPages();

  const route = detectRoute();
  route.init();

  menu.addEventListener('click', function (event) {
    console.log("here")
    drawer.classList.toggle('open');
    event.stopPropagation();
  });
  
  // hero.addEventListener('click', function () {
  //   drawer.classList.remove('open');
  // });
  
  main.addEventListener('click', function () {
    drawer.classList.remove('open');
  });
});
