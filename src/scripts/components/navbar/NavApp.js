import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty()
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <div class="navbar">
        <div class="navbar-container">
          <img class="navbar-brand" src="/images/mam-logo.png" width="44px" alt="${this.brandName}" />
          <a id="menu" class="header__menu">☰</a>
          <nav id="drawer" class="nav">
            <nav-links class="ms-auto mb-2 mb-md-0">
          </nav>
        </div>
      </div>
    `;
  }
}

customElements.define('nav-app', NavApp);
