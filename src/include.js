function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error('Error loading component:', err));
}

function loadHeader() {
  loadComponent('header', 'components/header.html');
}
function loadFooter() {
  loadComponent('footer', 'components/footer.html');
}

function loadContent(page) {
  loadComponent('main-content', `components/${page}.html`);

  // load css flies according to page
  if (page === 'browse') {
    loadCSS(['browse.css', 'cardp.css']);
  } else if (page === 'sell') {
    loadCSS(['sell.css', 'cardp.css']);
  } else if (page === 'login') {
    loadCSS(['login.css', 'cardp.css']);
  } else {
    // Default or unknown page — remove dynamic CSS
    loadCSS([]);
  }
}

// Load header and default page on startup
window.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
  loadContent('featured');  // Default content
});
