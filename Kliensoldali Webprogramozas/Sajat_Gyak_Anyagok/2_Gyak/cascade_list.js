class CascadeSelect extends HTMLElement{
    constructor() {
        super();
        const template = document.querySelector('template#cascade-select-template');
        const content = template.content.cloneNode(true);
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content);
        this.populate = this.populate.bind(this);
    }

    connectedCallback() {
        this.collectOptions(); // adatok kigyüjtése
        this.createSelects();  // select-ek létrehozása + 1. select feltöltése
        this.populate();       // 2. select feltöltése
        this.groupSelect.addEventListener('change', () => {
            this.populate();   // 2. select feltöltése, ha change van az 1. selectben
        });
    }
    disconnectedCallback() {
        this.groupSelect.removeEventListener('change', this.populate);
    }
    collectOptions() {
        this.originalSelect = this.querySelector('select');
        const optGroups = this.querySelectorAll('optgroup');
        this.dataGroups = new Map();
        optGroups.forEach(optGroup => {
            const subOptions = [];
            optGroup.querySelectorAll('option').forEach(option => {
                subOptions.push({
                    text:  option.innerText,
                    value: option.getAttribute('value')
                });
            });
            this.dataGroups.set(optGroup.getAttribute('label'), subOptions);
        });
        console.log(this.dataGroups);
    }
    createSelects() {
        const selects = this.shadowRoot.querySelectorAll('select');
        this.groupSelect = selects[0];
        this.itemSelect = selects[1];
        console.log(selects[0]);
        this.itemSelect.setAttribute('name', this.originalSelect.getAttribute('name'));
        this.originalSelect.insertAdjacentElement('afterend', this.groupSelect);
        this.groupSelect.insertAdjacentElement('afterend', this.itemSelect);
        const groupOptionalHtml = [...this.dataGroups.keys()]
        .map(
            groupLabel =>`<option vale="${groupLabel}"> ${groupLabel} </option>`
        ).join('');
        this.groupSelect.innerHTML = groupOptionalHtml;
    }
    populate() {
        const selectedGroup = this.groupSelect.value;
        const items = this.dataGroups.get(selectedGroup);
        const itemOptionalHtml = items
        .map(
            item =>`<option vale="${item.value}"> ${item.text} </option>`
        ).join('');
        this.itemSelect.innerHTML = itemOptionalHtml;
    }
}

window.customElements.define('cascade-select', CascadeSelect);