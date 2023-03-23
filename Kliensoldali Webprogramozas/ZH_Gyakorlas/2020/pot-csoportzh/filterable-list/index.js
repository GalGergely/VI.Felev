const h1 = document.querySelector('h1');

const newDiv = document.createElement('div');
const input = document.createElement('input');
input.setAttribute('type', 'text');
const ul = document.querySelector('ul');
input.addEventListener('input', function() {
    ul.querySelectorAll('li').forEach(li => {
        if (li.textContent.includes(input.value)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
});
newDiv.insertAdjacentElement('afterbegin', ul);
newDiv.insertAdjacentElement('afterbegin', input);
h1.insertAdjacentElement('afterend', newDiv);



