document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navContainer = document.querySelector('.nav-container');
  const barsIcon = menuToggle.querySelector('.fa-bars');
  const timesIcon = menuToggle.querySelector('.fa-times');
  
  menuToggle.addEventListener('click', function() {
    navContainer.classList.toggle('active');
    barsIcon.style.display = navContainer.classList.contains('active') ? 'none' : 'block';
    timesIcon.style.display = navContainer.classList.contains('active') ? 'block' : 'none';
  });
});