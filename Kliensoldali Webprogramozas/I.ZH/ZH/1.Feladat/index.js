const div = document.getElementById('szines-bizbasz');
window.addEventListener('scroll', function() {
  var r = window.scrollY / document.body.scrollHeight * 400;
  div.style.backgroundColor = "rgb(" + r + ",0,0)";
});