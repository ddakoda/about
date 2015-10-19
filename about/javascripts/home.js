$(document).ready(function(){
  $('.hamburger').hide();

  $('.hamburger-toggle').on("click", function(evt){evt.preventDefault();

    $('.hamburger').slideToggle("expand");
  });

  var dakodaImages = ['milo.jpg', 'pi.jpg', 'ak.jpg', 'steven.jpg'];
  var dakoda = dakodaImages[Math.floor(Math.random() * dakodaImages.length)];
    $('#profile-pic').attr('src', 'img/cats/' + dakoda);

  // var intro = introImages[]

  var height = $(window).height();
    $('#intro').height(height);
    $('#profile').height(height);
    $('#contact').height(height);

  $(window).resize(function() {
      var height = $(window).height();
      $('#intro').height(height);
      $('#profile').height(height);
      $('#contact').height(height);
  });

  // var introImages = ['co.jpg', 'door.jpg', 'kapula.jpg', 'kula.jpg', 'maui.jpg', 'patio.jpg', 'sidewalk.jpg'];

  // function toggleStuff (){
  //   // returns array of hidden images
  //   var picArray = $('.li-imgs').find('img');
  //   for (var i = 0; i > picArray.length; i++) {
  //     // pluck off individual picture
  //     var pic = picArray[i].pop();
  //     // show that shiiiiit
  //     pic.show();
  //   }
  // };

  // setInterval(toggleStuff(), 3000)

  var items = $('ul .li-imgs').toArray();
  var totalIterations = (items.length - 1);
  var i = 0;

  setInterval(function() {
    $(items[i]).fadeIn(2000).fadeOut(2000);

    i = (i >= totalIterations) ? 0 : i + 1;
  }, 4000)

})


