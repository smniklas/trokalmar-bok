(function($){
  $(function(){
    $('a').click(function(e){
              e.preventDefault();
        var goTo = this.getAttribute("href");
      $('.image-mid').fadeOut(100);
      $('.card-left').toggleClass('flipped');
      $('.card-right').toggleClass('flipped');
        setTimeout(function(){
            window.location = goTo;
        },1000);
    });
  }); // end of document readys
})(jQuery); // end of jQuery name space