(function () {
  const nav = document.querySelector('.navigation');
  if (!nav) return;

  // Push page content down so it starts below the fixed nav
  function applyOffset() {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  }
  applyOffset();
  window.addEventListener('resize', applyOffset, { passive: true });

  // Hide while scrolling, reappear when idle
  let scrollTimer;

  window.addEventListener('scroll', function () {
    // Always show nav when at the very top
    if (window.scrollY <= nav.offsetHeight) {
      nav.classList.remove('nav-hidden');
      return;
    }

    nav.classList.add('nav-hidden');

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      nav.classList.remove('nav-hidden');
    }, 400);
  }, { passive: true });
}());
