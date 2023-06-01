class Password extends HTMLElement {
  constructor() {
    super();
    const template = document.querySelector('template#cascade-select-template');
    const content = template.content.cloneNode(true);
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(content);
  }
  connectedCallback() {
    this.input = this.querySelector("input");
    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", e => this.togglevisibility(e));
  }
  disconnectedCallback() {
    this.button.removeEventListener("click", e => this.togglevisibility(e));
  }
  togglevisibility(e) {
   if (this.input.type === "password") {
      this.input.type = "text";
    } else {
      this.input.type = "password";
    }
    e.preventDefault();
  }
}