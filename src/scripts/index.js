import 'regenerator-runtime';
import '../styles/scss/main.scss';
import './components/index';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const START = 10;
const NUMBER_OF_IMAGES = 100;

window.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContainer'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
