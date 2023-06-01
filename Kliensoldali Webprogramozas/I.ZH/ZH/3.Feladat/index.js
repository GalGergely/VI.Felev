const input = document.getElementById('input-forregex');

class InputForregex extends HTMLElement {
    constructor(regexstring) {
      super();
      this.string = new RegExp(regexstring);
      console.log(this.string);
        this.input = document.getElementById('input-forregex');
    }

    connectedCallback() {
        this.input.addEventListener('input', function() {
            if(input.value.match(this.string)) {
                console.log('match');
            }
        });
    }

    disConnectedCallback() {
        this.input.removeEventListener();
    }
  }

window.customElements.define("input-forregex", InputForregex);

const xd = new InputForregex('/^[0-9]+$/');