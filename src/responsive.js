function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  }
  
  function updateLayout() {
    const width = window.innerWidth;
    const body = document.body;
  
    // Reset classes
    body.classList.remove('mobile', 'tablet', 'desktop');
  
    // Set responsive class
    if (width < 768) {
      body.classList.add('mobile');
    } else if (width < 1024) {
      body.classList.add('tablet');
    } else {
      body.classList.add('desktop');
    }
  
    // Close mobile nav if resizing out of mobile
    if (!body.classList.contains('mobile')) {
      const nav = document.getElementById('mobile-nav');
      if (nav) nav.classList.remove('open');
    }
  }
  
  function setupMenuHandlers() {
    // Toggle menu button
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMenu);
    }
  
    // Auto-collapse nav when a link is clicked (mobile only)
    const nav = document.getElementById('mobile-nav');
    const links = nav?.querySelectorAll('a');
  
    if (links) {
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (document.body.classList.contains('mobile')) {
            nav.classList.remove('open');
          }
        });
      });
    }
  }
  
  // Initialize everything
  window.addEventListener('DOMContentLoaded', () => {
    updateLayout();
    setupMenuHandlers();
  });
  
  window.addEventListener('resize', updateLayout);
  