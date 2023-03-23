class ImageTextarea extends HTMLElement {
    constructor() {
        super();
        this.textarea = document.querySelector('[data-markdown]');
        this.ul = document.createElement('ul');
        this.textarea.insertAdjacentElement('afterend', this.ul);
        this.markdownImagesRegEx = /!\[\]\((.*?)\)/g;
        this.text = this.textarea.value;
        this.images = [...this.text.matchAll(this.markdownImagesRegEx)];
        this.prev = this.images.length;
        this.images.forEach(image => {
            this.ul.innerHTML += `<li><img src="${image[1]}" alt=""></li>`;
        });
    }
    connectedCallback() {
        this.textarea.addEventListener('input', () => {
            this.text = this.textarea.value;
            this.images = [...this.text.matchAll(this.markdownImagesRegEx)];
            if (this.images.length > this.prev) {
                this.prev++;
                this.ul.innerHTML = ""
                this.images.forEach(image => {
                    this.ul.innerHTML += `<li><img src="${image[1]}" alt=""></li>`;
                  });
            }
          console.log(`Képek száma: ${this.images.length}`);
        });
    }

    disConnectedCallback() {
      this.textarea.removeEventListener('input');
    }
}
window.customElements.define("image-textarea", ImageTextarea);