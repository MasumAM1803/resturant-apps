import 'regenerator-runtime';
import '../styles/scss/main.scss';
import './components/index';
import swRegister from './utils/sw-register';
import App from './views/app';

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
