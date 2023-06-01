class LenyiloLista extends HTMLElement {
    constructor() {
      super();
      this.lis = document.querySelectorAll('li');
        this.lis.forEach(li => {
            var children = li.querySelectorAll('*');
            children.forEach(child => {
            child.style.display = 'none';
              });
        });
    }

    connectedCallback() {
        this.lis.forEach(li => {
            li.addEventListener('click', function() {
                var children = li.querySelectorAll('*');
                console.log(children);
                children.forEach(child => {
                    if (child.style.display == '') {
                        child.style.display = 'none';
                    } else {
                        child.style.display = '';
                    }

                  });
            });
        });
    }

    disConnectedCallback() {
        this.lis.forEach(li => {
            li.removeEventListener();
        });
    }
  }

  window.customElements.define("lenyilo-lista", LenyiloLista);
