class ConfirmWindow extends HTMLElement {
    constructor() {
      super();
      const template = document.querySelector("template#confirm-window-template");
      const content = template.content.cloneNode(true);
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(content);
    }
    connectedCallback() {
      this.link = this.querySelector("a");
      this.link.addEventListener("click", (e) => this.showConfirmWindow(e));
    }
    disConnectedCallback() {
      this.link.addEventListener("click", (e) => this.showConfirmWindow(e));
    }
    showConfirmWindow(e) {
      e.preventDefault();
      if (window.confirm("Are you sure you want to proceed?")) {
          window.location.href = this.link.href;
      }
    }
  }
  window.customElements.define("confirm-window", ConfirmWindow);