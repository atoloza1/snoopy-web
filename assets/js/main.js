document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.main-nav a');
  const path = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active-link');
    }
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const response = document.getElementById('contact-response');
      response.textContent = '¡Gracias! Tu mensaje ha sido enviado. Responderé pronto.';
      contactForm.reset();
    });
  }
});
