document.addEventListener('DOMContentLoaded', function() {
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const foodContainer = document.querySelector('.liste-cooking');

    let scrollAmount = 0;
    const step = 150; 

    
    nextBtn.addEventListener('click', function() {
        if (scrollAmount < foodContainer.scrollWidth - foodContainer.clientWidth) {
            scrollAmount += step;
            foodContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    
    prevBtn.addEventListener('click', function() {
        if (scrollAmount > 0) {
            scrollAmount -= step;
            foodContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});