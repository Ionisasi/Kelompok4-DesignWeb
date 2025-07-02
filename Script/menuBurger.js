document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('.burger-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});