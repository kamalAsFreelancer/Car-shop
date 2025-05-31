// include.js
function loadComponent(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading component:', error);
      });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '../components/header.html');
    loadComponent('footer', '../components/footer.html');
  });
  