document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const barsIcon = menuToggle.querySelector('.fa-bars');
    const timesIcon = menuToggle.querySelector('.fa-times');
  
    menuToggle.addEventListener('click', function() {
      navContainer.classList.toggle('active');
      
      // Alternar entre íconos
      if (navContainer.classList.contains('active')) {
        barsIcon.style.display = 'none';
        timesIcon.style.display = 'inline-block';
      } else {
        barsIcon.style.display = 'inline-block';
        timesIcon.style.display = 'none';
      }
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-container a').forEach(link => {
      link.addEventListener('click', function() {
        navContainer.classList.remove('active');
        barsIcon.style.display = 'inline-block';
        timesIcon.style.display = 'none';
      });
    });
  });