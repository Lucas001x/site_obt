function signup() {
    document.getElementById('nome-erro').textContent = '';
    document.getElementById('email-erro').textContent = '';
    document.getElementById('senha-erro').textContent = '';
    document.getElementById('confirmar-senha-erro').textContent = '';
  
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
  
    let isValid = true;
  
    if (nome === '') {
      document.getElementById('nome-erro').textContent = 'O nome é obrigatório.';
      isValid = false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
      document.getElementById('email-erro').textContent = 'Digite um email válido no formato email@tipo.com.';
      isValid = false;
    }
  
    if (senha.length < 8) {
      document.getElementById('senha-erro').textContent = 'A senha deve ter pelo menos 8 caracteres.';
      isValid = false;
    }
  
    if (senha !== confirmarSenha) {
      document.getElementById('confirmar-senha-erro').textContent = 'As senhas não coincidem.';
      isValid = false;
    }
  
    if (isValid) {
      window.location.href = '../pages/acessibilidade.html';
    }
  }  
