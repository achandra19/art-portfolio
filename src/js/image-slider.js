document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.image-slider .images img');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    arrowLeft.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = images.length - 1;
        showImage(currentIndex);
    });

    arrowRight.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
