function loadNeeds() {
    const needs = JSON.parse(localStorage.getItem('specialNeeds')) || [];
    document.querySelectorAll('.need-option input').forEach(checkbox => {
      checkbox.checked = needs.includes(checkbox.nextElementSibling.textContent);
    });
  }
  
  function saveNeeds() {
    const needs = [];
    document.querySelectorAll('.need-option input').forEach(checkbox => {
      if (checkbox.checked) {
        needs.push(checkbox.nextElementSibling.textContent);
      }
    });
  
    localStorage.setItem('specialNeeds', JSON.stringify(needs));
  
    const lastPage = localStorage.getItem('previousPage');
    if (lastPage.includes('signup.html')) {
      window.location.href = 'home.html';
    } else if (lastPage.includes('usuario.html')) {
      window.location.href = 'usuario.html';
    } else {
      window.location.href = 'usuario.html';
    }
  }
  
  function goBack() {
    window.history.back();
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    localStorage.setItem('previousPage', document.referrer);
    loadNeeds();
  });  