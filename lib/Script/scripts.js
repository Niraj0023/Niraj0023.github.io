

$(document).ready(function(){
    //$(this).scrollTop(0);
    $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
    });
    window.onscroll = function() {
         if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("headerId").style.top = "0";
        } else {
            document.getElementById("headerId").style.top = "-50px";
        }
    };
    
    
$('a[href*="#"]')
  .click(function(event) {
      // Figure out element to scroll to
    
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top  //this gives the exact point of pixel where need to create focus
        }, 1000, function() {
        
        });
      }
  });
});


