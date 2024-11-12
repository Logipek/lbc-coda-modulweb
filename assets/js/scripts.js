document.addEventListener('DOMContentLoaded', function() {
      // Sélectionne le conteneur et les boutons
  const carouselContainer = document.getElementById('carousel-container');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  // Largeur de défilement en pixels pour chaque clic (ajuster si nécessaire)
  const scrollAmounte = 250;

    let scrollPosition = 0;
    const scrollAmount = 300;
    const elementsToAnimate = document.querySelectorAll('.container, .row, .col, .card');
    
    elementsToAnimate.forEach(element => {
        element.style.transition = 'all 0.3s ease-in-out';
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            elementsToAnimate.forEach(element => {
                element.classList.add('resize-animation');
            });
            
            setTimeout(() => {
                elementsToAnimate.forEach(element => {
                    element.classList.remove('resize-animation');
                });
            }, 300);
        }, 150);
        });
    

  // Écoute les clics sur le bouton "Suivant"
  nextBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({
          left: scrollAmounte,
          behavior: 'smooth'
      });
  });

  // Écoute les clics sur le bouton "Précédent"
  prevBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({
          left: -scrollAmounte,
          behavior: 'smooth'
      });
  });
});