function goBack() {
    window.history.back();
}

function updateProfilePicture(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const currentProfilePicture = document.getElementById('current-profile-picture');
        currentProfilePicture.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function saveChanges() {
    const newName = document.getElementById('new-name').value;
    const newEmail = document.getElementById('new-email').value;
    const newAddress = document.getElementById('new-address').value;
    const newProfilePicture = document.getElementById('new-profile-picture').files[0];

    localStorage.setItem('profileName', newName);
    localStorage.setItem('profileEmail', newEmail);
    localStorage.setItem('profileAddress', newAddress);

    if (newProfilePicture) {
        const reader = new FileReader();
        reader.onload = function() {
            localStorage.setItem('profilePicture', reader.result);
            window.location.href = 'usuario.html';
        };
        reader.readAsDataURL(newProfilePicture);
    } else {
        window.location.href = 'usuario.html';
    }
}
