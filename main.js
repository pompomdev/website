const switchButton = document.getElementById('switch');
const container = document.querySelector('.container');

switchButton.addEventListener('change', function() {
  container.classList.toggle('dark-mode');
  if (container.classList.contains('dark-mode')) {
    document.body.style.backgroundColor = '#1d1d1d';
  } else {
    document.body.style.backgroundColor = '#f7f7f7';
  }
});
