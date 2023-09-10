const accordionButton = document.querySelector('.accordion-button');
const accordion = document.querySelector('.accordion');

accordionButton.addEventListener('click', function () {
    if (accordion.style.display === 'block') {
        accordion.style.display = 'none';
    } else {
        accordion.style.display = 'block';
    }
});
