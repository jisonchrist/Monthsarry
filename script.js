let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const total = slides.length;
  if (index >= total) currentIndex = 0;
  else if (index < 0) currentIndex = total - 1;
  else currentIndex = index;

  const slider = document.querySelector('.slides');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function toggleMessage(index) {
  const messages = document.querySelectorAll('.message');
  const message = messages[index];
  message.style.display = message.style.display === 'block' ? 'none' : 'block';
}

// Auto-slide every 6 seconds
setInterval(nextSlide, 6000);

// Start with first slide
showSlide(0);
