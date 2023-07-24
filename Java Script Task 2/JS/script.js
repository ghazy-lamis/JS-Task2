document.addEventListener('DOMContentLoaded', function() {
    const images = Array.from(document.querySelectorAll('.gallery-img')).map(img => img.getAttribute('src'));
    let currentIndex = 0;

    document.querySelectorAll('.gallery-img').forEach(function(img, index) {
        img.addEventListener('click', function() {
            currentIndex = index;
            updateLightbox();
            document.querySelector('.lightbox').style.visibility = 'visible';
            document.querySelector('.lightbox').style.opacity = '1';
        });
    });

    document.querySelector('.lightbox-close').addEventListener('click', function() {
        document.querySelector('.lightbox').style.visibility = 'hidden';
        document.querySelector('.lightbox').style.opacity = '0';
    });

    document.querySelector('.lightbox-prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });

    document.querySelector('.lightbox-next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });

    function updateLightbox() {
        document.querySelector('.lightbox-img').setAttribute('src', images[currentIndex]);
    }
});
