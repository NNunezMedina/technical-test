document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.pa__item');

  accordions.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        accordions.forEach(other => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
});