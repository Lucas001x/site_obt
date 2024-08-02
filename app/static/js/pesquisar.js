document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const cards = document.querySelectorAll('.restaurant-card');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const category = card.getAttribute('data-category');

            if (title.includes(query)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';  
            }
        });
    });
});
