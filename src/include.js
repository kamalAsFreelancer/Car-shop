function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error('Error loading component:', err));
}

function loadHeader() {
  const width = window.innerWidth;

  if (width > 768) {
    loadComponent('header', 'components/mheader.html');
  } else {
    loadComponent('header', 'components/header.html');
  }
}
function loadFooter() {
  loadComponent('footer', 'components/footer.html');
}
function loadContent(page) {
  loadComponent('main-content', `components/${page}.html`);

  // load css flies according to page
  if (page === 'browse') {
    loadCSS(['browse.css', 'cardp.css', 'nav.css']);
  } else if (page === 'sell') {
    loadCSS(['sell.css', 'cardp.css', 'nav.css']);
  } else if (page === 'login') {
    loadCSS(['login.css', 'cardp.css', 'nav.css']);
  } else if (page === 'car-details') {
      loadComponent('recom', 'components/recomanded.html');
      loadCSS(['recom.css', 'cardp.css', 'nav.css']);
  } else if (page === 'signup') {
      loadComponent('recom', 'components/recomanded.html');
      loadCSS(['recom.css', 'cardp.css', 'nav.css','login.css', 'signup.css']);
  } else {
    // Default or unknown page — remove dynamic CSS
    loadCSS(['style.css', 'cardp.css', 'nav.css', 'footer.css', 'header.css', 'featured.css', 'browse.css', 'sell.css', 'login.css', 'signup.css',]);
  }
}

// Load header and default page on startup
window.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
  loadContent('car-details');  // Default content
});
