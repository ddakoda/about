$(document).ready(function(){
  $('.hamburger').hide();

  $('.hamburger-toggle').on("click", function(evt){evt.preventDefault();

    $('.hamburger').slideToggle("expand");
  });

  var dakodaImages = ['milo.jpg', 'pi.jpg', 'ak.jpg', 'steven.jpg'];
  var dakoda = dakodaImages[Math.floor(Math.random() * dakodaImages.length)];
    $('#profile-pic').attr('src', 'img/' + dakoda);

  var height = $(window).height();
    $('#about').height(height);
    $('#profile').height(height);
    $('#contact').height(height);

  $(window).resize(function() {
      var height = $(window).height();
      $('#about').height(height);
      $('#profile').height(height);
      $('#contact').height(height);
  });
})
