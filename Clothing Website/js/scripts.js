$(document).ready(function($) {
    
    /* Pre Loader Starts */
    Pace.on("done", function() {
        $(".pre_loader").css("display", "none");
    });
    

    $(".hero_title").each(function(i) {
            var $current_element = $(this);
            setTimeout(function() {
                $current_element.addClass("reveal");
            }, i * 100);
        });
  
    $("#rotating-text").Morphext({
    
    animation: "bounceIn",
    
    separator: ",",
    
    speed: 3000,
    complete: function () {
        
    }
});

         /* Owl Carousel Starts */
     $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:0,
 

    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    animateOut: 'fadeOut'
     });
    /* Owl Carousel Ends */
    
    
    
   // Reveal text when in viewport
    
     $(".text_reveal:not(.in)").each(function(i) {
        var $current_element = $(this);
         $current_element.isInViewport(function(status) {
            if (status === "entered") {
                setTimeout(function() {
                    $current_element.addClass("in");
                }, i * 100);
            }
        });
    });
// Magnific Popup Image Gallery
    $('.gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
        
        }
    // other options
    });

});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("nav-bg-black");
        $(".navbar:after").css("opacity","1");
        
    } else {
        $(".navbar").removeClass("nav-bg-black");

    }
});