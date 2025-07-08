//navbar.js
const currentPage = location.pathname.split('/').pop();

document.write(`
  <div class="nav-bar">
    <img class="main-logo" src="Asset/main-logo0.png" alt="Logo" />
    <div class="frame-7"></div>
    <menu class="nav-menu">
      <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Beranda</a>
      <a href="edukasi.html" class="nav-link ${(
        currentPage === 'edukasi.html' || 
        currentPage === 'edukasiAutisme.html' || 
        currentPage === 'edukasiTipsBersahabat.html' ||
        currentPage === 'edukasiTunadaksa.html' ||
        currentPage === 'edukasiTunalaras.html' ||
        currentPage === 'edukasiTunarungu.html' ||
        currentPage === 'edukasiTunanetra.html'
      ) ? 'active' : ''}">Edukasi</a>
      <a href="kisah.html" class="nav-link ${(
        currentPage === 'kisah.html' ||
        currentPage === 'kisahInspirasiIrma.html' ||
        currentPage === 'kisahInspirasiDito.html' ||
        currentPage === 'kisahInspirasiNadya.html' ||
        currentPage === 'kisahInspirasiRamaditya.html' ||
        currentPage === 'kisahInspirasiYana.html'
      ) ? 'active' : ''}">Kisah Inspirasi</a>
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
