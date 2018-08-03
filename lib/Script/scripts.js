
/*--------------start of the document functionality--------------*/

$(document).ready(function(){
    //$(this).scrollTop(0);
    
    if(screen.width < 1100){
        $(".navDisResponsive").css("display","none");
        $("ul.navParent").css("height","auto");
        $(".crossHide").css("display","none");
        $(".tripleHide").css("display","block");
    }else{
        $(".navDisResponsive").css("display","block");
    }
    
    $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
    });
    window.onscroll = function() {
         if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470) {
            document.getElementById("headerId").style.top = "0";
        } else {
            document.getElementById("headerId").style.top = "-50px";
            if(screen.width < 1100){
                $(".navDisResponsive").css("display","none");
                $("ul.navParent").css("height","auto");
                $(".crossHide").css("display","none");
                $(".tripleHide").css("display","block");
                $("#imgScrlId").css("display","block");
            }else{
                $(".navDisResponsive").css("display","block");
            }
        }
    };
    
    $('.iconOpen').click(function(){
        $(".navDisResponsive").css("display","block");
        $("ul.navParent").css("height",((3/4)*screen.height));
        $(".crossHide").css("display","block");
        $("#imgScrlId").css("display","none");
        $(".ui-accordion .ui-accordion-header").css("position","static");
        $(".tripleHide").css("display","none");
    });
    
    $('.iconClose').click(function(){
        $(".navDisResponsive").css("display","none");
        $("ul.navParent").css("height","auto");
        $("ul.navParent").css("height","auto");
        $(".crossHide").css("display","none");
        $("#imgScrlId").css("display","block");
        $(".ui-accordion .ui-accordion-header").css("position","relative");
        $(".tripleHide").css("display","block");
    });
  
    setTimeout(function() {
        $('#imgScrlId').mCustomScrollbar({ 
            theme:"rounded-dots-dark",
            autoHideScrollbar: true,
            scrollInertia: 400,
            /*contentTouchScroll: "true",
            autoScrollOnFocus: "true",*/
        });
        $('.imgDivScrl').mCustomScrollbar('scrollTo','last');
        
        /*$('.imgDivScrl').hover(function(){
            //alert('dfdfdf');
            $('.imgDivScrl').mCustomScrollbar('scrollTo','top');
        });*/
        
        $(".imgDivScrl").mouseenter(function() {
            $('.imgDivScrl').mCustomScrollbar('scrollTo','top');
        }).mouseleave(function() {
            $('.imgDivScrl').mCustomScrollbar('scrollTo','last');
        });
        
        $( function() {
            $( "#accordion" ).accordion({
              collapsible: true
            });
          } );
        
    },500);
    
    
    
    
    
$('a[href*="#"]')
  .click(function(event) {
      // Figure out element to scroll to
    
      var target = $(this.hash);
    console.log(JSON.stringify(target.selector));
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        /*alert(screen.height);*/
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top  //this gives the exact point of pixel where need to create focus
        }, 1000, function() {
            
           /*alert(screen.width);*/
            
            if(screen.width < 1100){
                $(".navDisResponsive").css("display","none");
                $("ul.navParent").css("height","auto");
                $(".crossHide").css("display","none");
                $(".tripleHide").css("display","block");
                $("#imgScrlId").css("display","block");
            }else{
                $(".navDisResponsive").css("display","block");
            }
        });
      }
  });
});


