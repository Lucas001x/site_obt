$(document).ready(function() {
  $('#carouselTopRated').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 2;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
              if (e.direction == "left") {
                  $('.carousel-item').eq(i).appendTo('.carousel-inner');
              } else {
                  $('.carousel-item').eq(0).appendTo('.carousel-inner');
              }
          }
      }
  });

  const profileName = localStorage.getItem('profileName') || 'João';
  const profilePicture = localStorage.getItem('profilePicture') || '../assets/imgs/user-icon.png';

  $('.nome').text(profileName);
  $('.profile-pic').attr('src', profilePicture);

  $('.restaurant-card').click(function() {
    const restaurant = {
      name: $(this).data('name'),
      location: $(this).data('location'),
      rating: $(this).data('rating'),
      image: $(this).data('image')
    };

    localStorage.setItem('restaurant', JSON.stringify(restaurant));
    window.location.href = '../pages/restaurante.html';
  });
});

  $('.restaurant-card').click(function() {
      const restaurant = {
        name: $(this).data('name'),
        location: $(this).data('location'),
        rating: $(this).data('rating'),
        image: $(this).data('image')
      };

      let history = JSON.parse(localStorage.getItem('restaurantHistory')) || [];
      history.unshift(restaurant);
      localStorage.setItem('restaurantHistory', JSON.stringify(history));

      localStorage.setItem('restaurant', JSON.stringify(restaurant));
      window.location.href = 'restaurante.html';
    });
