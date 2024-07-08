document.addEventListener('DOMContentLoaded', () => {
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    
    const isFirstVisit = !Array.from(favoriteIcons).some(icon => localStorage.getItem(`favorite_${icon.dataset.restaurantId}`) !== null);

    favoriteIcons.forEach(icon => {
        const restaurantId = icon.dataset.restaurantId;

        if (isFirstVisit) {
            icon.dataset.favorite = "true";
            icon.querySelector('img').src = 'imgs/redheart.png';
            localStorage.setItem(`favorite_${restaurantId}`, JSON.stringify(true));
        } else {
            const isFavorite = JSON.parse(localStorage.getItem(`favorite_${restaurantId}`)) || false;
            icon.dataset.favorite = isFavorite ? "true" : "false";
            icon.querySelector('img').src = isFavorite ? 'imgs/redheart.png' : 'imgs/blankheart.png';
        }
    });

    const profileName = localStorage.getItem('profileName') || 'João';
    const profilePicture = localStorage.getItem('profilePicture') || 'imgs/user-icon.png';
    document.querySelector('.nome').textContent = profileName;
    document.querySelector('.profile-pic').setAttribute('src', profilePicture);
});

function toggleFavorite(icon) {
    const restaurantId = icon.dataset.restaurantId;
    let isFavorite = icon.dataset.favorite === "true";
    isFavorite = !isFavorite;
    icon.dataset.favorite = isFavorite ? "true" : "false";
    icon.querySelector('img').src = isFavorite ? 'imgs/redheart.png' : 'imgs/blankheart.png';
    localStorage.setItem(`favorite_${restaurantId}`, JSON.stringify(isFavorite));

    icon.classList.add('pulse');
    setTimeout(() => icon.classList.remove('pulse'), 300);
}
