document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navContainer = document.querySelector('.nav-container');
  const body = document.body;
  
  // Menú hamburguesa
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navContainer.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });
  
  // Cerrar menú al hacer clic en enlaces
  const navLinks = document.querySelectorAll('.nav-container a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navContainer.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });

  // Animación al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.producto, .bienvenida-contenido, .footer-column');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elementPosition < screenPosition) {
        element.style.opacity = '1';
      }
    });
  };
  
  // Mostrar elementos al cargar la página
  animateOnScroll();
  
  // Mostrar elementos al hacer scroll
  window.addEventListener('scroll', animateOnScroll);
});

