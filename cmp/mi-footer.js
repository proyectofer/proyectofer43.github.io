class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Laura Fernanda
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
