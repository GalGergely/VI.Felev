class CascadeSelect extends HTMLElement {
    
    constructor() {
        super();
        const template = document.querySelector('template#cascade-select-template');
        const content = template.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(content);
        this.populate = this.populate.bind(this);
    }

    connectedCallback() {
        this.collectOptions(); // adatok kigyüjtése
        this.createSelects();  // select-ek létrehozása + 1. select feltöltése
        this.populate();       // 2. select feltöltése
        this.groupSelect.addEventListener('change', this.populate);
    }

    disconnectedCallback() {
        this.groupSelect.removeEventListener('change', this.populate);
    }

    collectOptions() {
        
        this.originalSelect = this.querySelector('select');
        console.log(this.originalSelect);
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
        console.log(selects);
        this.groupSelect = selects[0];
        this.itemSelect = selects[1];
        this.itemSelect.setAttribute(
            'name',
            this.originalSelect.getAttribute('name')
        );

        const groupOptionalHtml = [...this.dataGroups.keys()]
        .map(
            groupLabel =>`<option vale="${groupLabel}"> ${groupLabel} </option>`
        ).join('');
        this.groupSelect.innerHTML = groupOptionalHtml;
    }

    populate() {
        const currentGroup = this.groupSelect.value;
        const groupItems = this.dataGroups.get(currentGroup);
        const itemHtml = groupItems
        .map(item => 
            `<option value="${item.value}">${item.text}</option>`
        ).join('');
        this.itemSelect.innerHTML = itemHtml;
    }
}

window.customElements.define(
    'cascade-select',
    CascadeSelect
);