import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class btnMainContent extends LitWithoutShadowDom {
  render() {
    return html`
        <a href="#maincontent" class="skip-link">Go to Main Content</a>
    `;
  }
}

customElements.define('btn-main-content', btnMainContent);
