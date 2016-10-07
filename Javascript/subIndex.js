(function($){
  $(function(){
    var hrefarray = ["hem", "historik", "motesplats", "masterrad", "lokaler", "kontakt","aktiviteter","bildgalleri"];
    var x = window.location.href.split('/menu/').pop();
    console.log(x);
    switch(x){
        default:
        break;
        case "hem":
            $(".hem").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
        case "historik":
            $(".historik").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
        case "motesplats":
            $(".motesplats").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
        case "masterrad":
            $(".masterad").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
        case "lokaler":
            $(".lokaler").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
        case "kontakt":
            $(".kontakt").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
        case "aktiviteter":
            $(".aktiviteter").addClass("disable_a_href");
            $(".fade-text").fadeIn(800);
            break;
    }
    
    $("a").click(function(e){
        e.preventDefault();
        var goTo = this.getAttribute("href");
        console.log(goTo);
        $('.card-page').toggleClass('flipped');
        setTimeout(function(){
            window.location = goTo;
        },800);
    });
    
  }); // end of document readys
})(jQuery); // end of jQuery name space