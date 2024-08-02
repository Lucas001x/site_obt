function goBack() {
    window.history.back();
}

function resetPassword() {
    const code = document.getElementById('verification-code').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('password-error');

    errorMessage.textContent = '';

    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem!";
        return;
    }

    if (newPassword.length < 8) {
        errorMessage.textContent = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }

    console.log("Código:", code);
    console.log("Nova Senha:", newPassword);

    window.location.href = '../pages/login.html';
}
