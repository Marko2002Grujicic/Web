var images = document.querySelectorAll('img');

images.forEach(function (image) {
  image.addEventListener('click', function (event) {
    event.target.style.borderColor = 'red';
    if (!event.target.classList.contains('wide')) {
      event.stopPropagation();
    }
  });
});
document.addEventListener('click', function (event) {
  console.log(`Clicked on: ${event.target.tagName}`);
});