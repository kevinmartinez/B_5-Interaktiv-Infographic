// jQuery

// Fade animation för mina h2
$(window).scroll(function() {
  $('.is-hidden').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass("fadeIn");
    }
  });
});
