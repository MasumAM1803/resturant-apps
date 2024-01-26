import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="Home" to="/"></nav-link>
        <nav-link content="Favorite" to="/transactions/add.html"></nav-link>
        <nav-link content="About Us" to="/transactions/add.html"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
