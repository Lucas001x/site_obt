var map = L.map('map').setView([-20.3155, -40.3128], 13); // Coordenadas de exemplo

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-20.3155, -40.3128]).addTo(map)
    .bindPopup('Exemplo de marcador.')
    .openPopup();

function home() {
    window.location.href = 'home.html';
}

function messages() {
    window.location.href = 'home.html';
}

function profile() {
    window.location.href = 'usuario.html';
}
