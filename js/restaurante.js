document.addEventListener('DOMContentLoaded', function() {
  var restaurant = JSON.parse(localStorage.getItem('restaurant'));
  var heartIcon = document.getElementById('heartIcon');
  
  if (restaurant) {
    document.querySelector('.restaurant-img').src = restaurant.image;
    document.getElementById('titulo').innerText = restaurant.name;
    document.querySelector('.location').innerText = restaurant.location;
    document.getElementById('aval').innerText = '⭐ ' + restaurant.rating + ' (50+)';
    document.getElementById('preco').innerText = restaurant.price || '$$';
    document.getElementById('subtitulo').innerText = restaurant.type || 'Lanchonete';
    
    var accessibilityList = document.querySelector('#acessibilidade ul');
    (restaurant.accessibility || []).forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      accessibilityList.appendChild(li);
    });
  }

  heartIcon.addEventListener('click', function() {
    if (heartIcon.src.includes('../assets/imgs/blankheart.png')) {
      heartIcon.src = '../assets/imgs/redheart.png';
      heartIcon.classList.add('pulse');
      setTimeout(() => heartIcon.classList.remove('pulse'), 1000);
      addToFavorites(restaurant);
    } else {
      heartIcon.src = '../assets/imgs/blankheart.png';
      removeFromFavorites(restaurant);
    }
  });

  function addToFavorites(restaurant) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.name === restaurant.name)) {
      favorites.push(restaurant);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  function removeFromFavorites(restaurant) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => fav.name !== restaurant.name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  document.getElementById('comentariosBtn').addEventListener('click', function() {
    alert('Aqui você pode ver os comentários sobre o restaurante.');
  });

  document.getElementById('saberMaisBtn').addEventListener('click', function() {
    alert('Aqui você pode saber mais sobre o restaurante.');
  });
});

function goBack() {
  window.history.back();
}
