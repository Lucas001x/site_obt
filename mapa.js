var map = L.map('map').setView([-20.3155, -40.3128], 13); // Coordenadas de exemplo

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-20.3155, -40.3128]).addTo(map)
    .bindPopup('Exemplo de marcador.')
    .openPopup();

function home() {
    alert('Início');
}

function map() {
    alert('Mapa');
}

function messages() {
    alert('Mensagens');
}

function profile() {
    alert('Perfil');
}
