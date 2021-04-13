class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Gonzalez Vargas Laura Fernanda
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
