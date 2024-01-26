import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
  render() {
    return html`
      <p class="">
        Copyright © 2024 - Abdul Restaurant Apps | by Abdul Matin
      </p>
    `;
  }
}

customElements.define('footer-app', FooterApp);
