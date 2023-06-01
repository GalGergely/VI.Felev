const gomb = document.getElementById('nyilatkozat-button');
gomb.style.display = 'none';

const doc = document.getElementById('container');
doc.addEventListener('scroll', function() {
    if(doc.scrollTop + doc.clientHeight === doc.scrollHeight) {
        console.log('End of page!');
        gomb.style.display = 'block';
    }
  });