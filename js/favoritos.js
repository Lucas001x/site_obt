document.addEventListener('DOMContentLoaded', () => {
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    
    updateFavoriteRestaurants();

    const profileName = localStorage.getItem('profileName') || 'João';
    const profilePicture = localStorage.getItem('profilePicture') || '../assets/imgs/user-icon.png';
    document.querySelector('.nome').textContent = profileName;
    document.querySelector('.profile-pic').setAttribute('src', profilePicture);
});

function updateFavoriteRestaurants() {
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    favoriteIcons.forEach(icon => {
        const restaurantId = icon.dataset.restaurantId;
        const isFavorite = JSON.parse(localStorage.getItem(`favorite_${restaurantId}`)) || false;
        if (!isFavorite) {
            icon.closest('.restaurant-card').remove();
        } else {
            icon.dataset.favorite = "true";
            icon.querySelector('img').src = '../assets/imgs/redheart.png';
        }
    });
}

function toggleFavorite(icon) {
    const restaurantId = icon.dataset.restaurantId;
    let isFavorite = icon.dataset.favorite === "true";
    isFavorite = !isFavorite;
    icon.dataset.favorite = isFavorite ? "true" : "false";
    icon.querySelector('img').src = isFavorite ? '../assets/imgs/redheart.png' : '../assets/imgs/blankheart.png';
    localStorage.setItem(`favorite_${restaurantId}`, JSON.stringify(isFavorite));

    icon.classList.add('pulse');
    setTimeout(() => icon.classList.remove('pulse'), 300);
}
