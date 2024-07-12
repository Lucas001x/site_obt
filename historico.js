document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('restaurantHistory')) || [];

    if (history.length === 0) {
        historyList.innerHTML = '<p class="text-center">Nenhum histórico de restaurantes encontrado.</p>';
    } else {
        history.forEach(restaurant => {
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${restaurant.imgSrc}" class="card-img-top" alt="${restaurant.name}">
                    <div class="card-body">
                        <h5 class="card-title">${restaurant.name}</h5>
                        <div class="restaurant-info">
                            <p class="card-text">${restaurant.location}</p>
                            <span class="rating">${restaurant.rating} <span>&#9733;</span></span>
                        </div>
                    </div>
                </div>
            `;
            historyList.appendChild(card);
        });
    }
});

function goBack() {
    window.location.href = 'usuario.html';
}