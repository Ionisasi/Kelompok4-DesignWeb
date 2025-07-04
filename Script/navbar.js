//navbar.js
const currentPage = location.pathname.split('/').pop();

document.write(`
  <div class="nav-bar">
    <img class="main-logo" src="Asset/main-logo0.png" alt="Logo" />
    <div class="frame-7"></div>
    <menu class="nav-menu">
      <a href="halamanUtama.html" class="nav-link ${currentPage === 'halamanUtama.html' ? 'active' : ''}">Beranda</a>
      <a href="edukasi.html" class="nav-link ${currentPage === 'edukasi.html' ? 'active' : ''}">Edukasi</a>
      <a href="kisahInspirasiIrma.html" class="nav-link ${currentPage === 'kisahInspirasiIrma.html' ? 'active' : ''}">Kisah Inspirasi</a>
      <a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'active' : ''}">Tentang Kami</a>
      <a href="donasi.html" class="nav-link ${currentPage === 'donasi.html' ? 'active' : ''}">Donasi</a>
      <a href="kontak.html" class="nav-link ${currentPage === 'kontak.html' ? 'active' : ''}">Kontak</a>
    </menu>
    <button class="burger-btn">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
  </div>
`);