// داخل ملف script.js
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach((slider) => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('img');
    const prevBtn = slider.parentElement.querySelector('.prev-btn');
    const nextBtn = slider.parentElement.querySelector('.next-btn');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });
});





    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    // جلب زر Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// إظهار أو إخفاء الزر عند التمرير
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// التمرير إلى الأعلى عند النقر
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // إضافة تأثير التمرير السلس
  });
});
