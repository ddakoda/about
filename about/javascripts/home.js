$(document).ready(function(){
// #### Cat Change On Refresh ####
  var dakodaImages = ['milo.jpg', 'pi.jpg', 'ak.jpg', 'steven.jpg'];
  var dakoda = dakodaImages[Math.floor(Math.random() * dakodaImages.length)];
    $('#profile-pic').attr('src', 'img/cats/' + dakoda);

// #### Resize/Restore ####
  var height = $(window).height();
    $('#intro').height(height);
    $('#work').height(height);
    $('.slide').height(height);

  $(window).resize(function() {
    var height = $(window).height();
      $('#intro').height(height);
      $('#work').height(height);
      $('.slide').height(height);
  });

// #### JS To Toggle Intro Images ####
  var items = $('ul .li-imgs').toArray();
  var totalIterations = (items.length - 1);
  var i = 0;

  setInterval(function() {
    $(items[i]).fadeIn(3000).fadeOut(3000);

    i = (i >= totalIterations) ? 0 : i + 1;
  }, 6000)

})


