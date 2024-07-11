function login() {
  document.getElementById('usuario-erro').textContent = '';
  document.getElementById('password-erro').textContent = '';

  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value;

  let isValid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (usuario === '' || !emailPattern.test(usuario)) {
    document.getElementById('usuario-erro').textContent = 'Digite um email válido no formato email@tipo.com.';
    isValid = false;
  }

  if (password.length < 8) {
    document.getElementById('password-erro').textContent = 'A senha está incorreta.';
    isValid = false;
  }

  if (isValid) {
    window.location.href = 'home.html';
  }
}
