import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class btnMainContent extends LitWithoutShadowDom {
  render() {
    return html`
      <button class="skip-link">Go to Main Content</button>
    `;
  }
}

customElements.define('btn-main-content', btnMainContent);
