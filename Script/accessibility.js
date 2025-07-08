(function () {
  // 1. Buat tombol melayang
  const button = document.createElement("div");
  button.id = "accessibility-button";
  button.className = "floating-btn";
  button.title = "Menu Aksesibilitas";
  button.innerHTML = "🔧";

  // 2. Buat menu dropdown
  const menu = document.createElement("div");
  menu.id = "accessibility-menu";
  menu.className = "floating-menu";
  menu.innerHTML = `
    <button onclick="increaseText()">A+</button>
    <button onclick="decreaseText()">A-</button>
    <button onclick="toggleHighContrast()">Kontras Tinggi</button>
    <button onclick="resetSettings()">Reset</button>
  `;

  // 3. Tambahkan ke body
  document.body.appendChild(button);
  document.body.appendChild(menu);

  // 4. Toggle menu saat tombol diklik
  button.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  // 5. Fungsi penyesuaian ukuran teks
  let scaleFactor = 1;
  const minScale = 0.8;
  const maxScale = 1.5;
  const step = 0.1;
  const styleClass = `
    p, h1, h2, h3, h4, h5, h6, span, li, .article, .text, 
    [class*="text"], [class*="Text"], [class*="teks"],[class*="Judul"], [class*="judul"], [class*="sub"], [class*="tittle"], 
    [class*="title"], [class*="desc"], [class*="more"], [class*="item"], [class*="button"],
    [class*="content"], [class*="what-we-do"], [class*="form"], [class*="btn"]
  `;

  function adjustTextSize(change) {
    scaleFactor += change;
    if (scaleFactor < minScale) scaleFactor = minScale;
    if (scaleFactor > maxScale) scaleFactor = maxScale;

    const textElements = document.querySelectorAll(styleClass);

    textElements.forEach((el) => {
      if (!el.dataset.originalFontSize) {
        el.dataset.originalFontSize = window.getComputedStyle(el).fontSize;
      }
      const originalSize = parseFloat(el.dataset.originalFontSize);
      el.style.fontSize = `${originalSize * scaleFactor}px`;
      el.style.lineHeight = "normal"; // Hindari line-height aneh
    });
  }

  window.increaseText = () => adjustTextSize(step);
  window.decreaseText = () => adjustTextSize(-step);

  // 6. Toggle kontras tinggi
  window.toggleHighContrast = () => {
    document.body.classList.toggle("high-contrast");
  };

  // 7. Reset semua pengaturan
  window.resetSettings = () => {
    scaleFactor = 1;
    document.querySelectorAll(styleClass).forEach((el) => {
      if (el.dataset.originalFontSize) {
        el.style.fontSize = "";
      }
    });

    document.body.classList.remove("high-contrast");
    menu.style.display = "none";
  };

  // 8. Style untuk mode kontras tinggi
  const style = document.createElement("style");
  style.innerHTML = `
    .high-contrast {
      background-color: black !important;
      color: yellow !important;
    }
    .high-contrast * {
      background-color: black !important;
      color: yellow !important;
      border-color: yellow !important;
    }
    .high-contrast a {
      color: #00ffff !important;
      text-decoration: underline;
    }
    .high-contrast button,
    .high-contrast input,
    .high-contrast select,
    .high-contrast textarea {
      border: 1px solid yellow !important;
      color: yellow !important;
      background: black !important;
    }
  `;
  document.head.appendChild(style);
})();