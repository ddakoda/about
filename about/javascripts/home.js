$(document).ready(function(){
  $('.hamburger').hide();

  $('.hamburger-toggle').on("click", function(evt){evt.preventDefault();

    $('.hamburger').slideToggle("slow");
  });

// var dakodaImages = ['milo.jpg', 'ak.jpg', 'ak.jpg', 'steven.jpg'];
//     var dakoda = dakodaImages[Math.floor(Math.random() * dakodaImages.length)];
//     $('#profile-pic').attr('src', '/img/' + dakoda);
//   });

})
