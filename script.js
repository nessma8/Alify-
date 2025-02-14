

//لتحريك بطاقات الاكثر مبيعا

window.onload = function () {
    let currentIndex = 0;
    const slider = document.querySelector('.card-slider');
    const totalCards = document.querySelectorAll('.product-card').length;

    setInterval(() => {
        if (currentIndex === totalCards - 5) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        slider.style.transform = `translateX(-${currentIndex * 260}px)`;
    }, 3000);
};


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

// Select the menu toggle button and menu
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Add click event listener to toggle the menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
function cardHover(card) {
  card.style.transform = "scale(1.05)"; // زيادة حجم البطاقة
  card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)"; // إضافة الظلال
}

function cardLeave(card) {
  card.style.transform = "scale(1)"; // إعادة حجم البطاقة إلى الطبيعي
  card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // إعادة الظلال
}



















