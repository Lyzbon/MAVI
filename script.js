// Alterna a classe "open" no clique ou toque
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('open');
  });

  card.addEventListener('touchstart', function() {
    this.classList.toggle('open');
  });
});
