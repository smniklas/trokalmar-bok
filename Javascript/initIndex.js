(function($){
  $(function(){
    $('.home-page').click(function(){
      $('.image-mid').fadeOut(100)
      $('.card-left').toggleClass('flipped');
      $('.card-right').toggleClass('flipped');
    });
  }); // end of document readys
})(jQuery); // end of jQuery name space