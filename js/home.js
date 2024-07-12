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
});
