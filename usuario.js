window.onload = function() {
    const profileName = localStorage.getItem('profileName') || 'João';
    const profileEmail = localStorage.getItem('profileEmail') || 'joao@gmail.com';
    const profilePicture = localStorage.getItem('profilePicture') || 'imgs/user-icon.png';

    document.getElementById('profile-name').textContent = profileName;
    document.getElementById('profile-email').textContent = profileEmail;
    document.getElementById('profile-picture').src = profilePicture;
}

function goBack() {
    window.location.href = 'home.html';
}

function edit() {
    window.location.href = 'editar.html';
}

function logout() {
    window.location.href = 'login.html';
}
