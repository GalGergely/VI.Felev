//1.Feladat:

const gomb = document.getElementById('btn-new-content');
gomb.style.display = 'none';

window.addEventListener('scroll', function() {
    console.log(document.documentElement.scrollHeight);
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        const template = document.querySelector("template#newRow");
        console.log('End of page!');
        const newParagraph = document.createElement('div');
        newParagraph.innerHTML = template.innerHTML;
        document.body.appendChild(newParagraph);
    }
  });

