// Theme toggle, mobile menu and footer year. No dependencies.
(function () {
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  function label() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    themeBtn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    themeBtn.title = 'Switch to ' + next + ' theme';
  }
  if (themeBtn) {
    label();
    themeBtn.addEventListener('click', function () {
      var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', t);
      try { localStorage.setItem('theme', t); } catch (e) {}
      label();
    });
  }

  var navBtn = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (navBtn && links) {
    function close() { navBtn.setAttribute('aria-expanded', 'false'); links.classList.remove('open'); }
    navBtn.addEventListener('click', function () {
      var open = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open', !open);
    });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
