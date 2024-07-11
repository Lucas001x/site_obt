document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        heart.classList.toggle('active');
    });

    document.getElementById('saberMaisBtn').addEventListener('click', () => {
        alert('Mostrar mais informações sobre acessibilidade.');
    });

    document.getElementById('comentariosBtn').addEventListener('click', () => {
        alert('Mostrar comentários.');
    });
});
