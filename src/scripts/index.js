import 'regenerator-runtime'; /* for async await transpile */
import '../styles/scss/main.scss';
import './components/index';
import App from './views/app';

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
  initPages();

  const route = detectRoute();
  route.init();

  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
  });
  
});
