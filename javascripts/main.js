// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: polo.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro, .full-height').css('height',vH);
     $('.full-width').css('width',vW);
     $('.half-height').css('height',vH/2);
     $('.rs-bg-img').css('max-height',vH);
     $('.rs-bg-img').css('max-width',vW);

    
     //percentage
     // var wrapWidth = vW;
     // var h1 = (wrapWidth * 17 / 100).toFixed(2);
     // $('.hero-caps h1').css('font-size',h1+'px');
   

//Equi-heigh Divs
$(document).ready(function() {

  if(vW > 1000)
  {
   var maxHeight = -1;

   $('.equal-height-one').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.equal-height-one').each(function() {
     $(this).height(maxHeight);
   });

}

 });


//contact form expander
$('#contact-trigger-button').click(function(){
  $('#contact-form').slideDown(2000);
  $('html, body').animate({scrollTop: ($('#contact-form').offset().top - 0)});
})


//Service Panel Show
$(document).ready(function() {

$('.service-name-wrap').find('a').click(function(){
var serviceTarget = $(this).attr('href');
$('.service-name-wrap a').removeClass('active-service');
$(this).addClass('active-service');
//$('.service-details').slideToggle(1000);
$(serviceTarget).slideToggle(1000);
return(false);
})

// $('.active-service').click(function(){
// $(this).slideUp(1000);
// })


 });


     //TWITTER INIT (Updated with compatibility on Twitter's new API):
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      $(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 1,
              loading_text: 'loading twitter update...',
              username:'designovastudio'
              /* etc... */
          });
        }); 


    //Features Switching - State Change
    $('.features-icon').click(function(){
          $('.features-icon').removeClass('current');
          $(this).addClass('current');
    })

    $("#intro-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true,
        transitionStyle : "goDown"
      });


    $("#intro-statistics-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true,
        transitionStyle : "backSlide"
      });

    $("#intro-agency-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true
      });


    $("#intro-photography-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true,
        autoHeight: true,
        slideSpeed: 100,
        transitionStyle : "fadeUp"
      });


    $("#intro-parallax-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });
      
    $("#about-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });

    $("#thumb-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 3,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [5000,8],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[800,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });

    $("#process-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,3],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: false,
      });



    $("#testimonial-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });



    $("#team-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,3],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[1024,3],
        itemsTabletSmall: [640,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: false,
      });


    $("#client-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,4],
        itemsDesktopSmall: [1440,4],
        itemsTablet:[1024,3],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });



    $("#project-carousel").owlCarousel({
        navigation : false,
        pagination: false,
        responsive: true,
        items: 2,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [5000,8],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[800,2],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        autoPlay: true
      });


    //Venobox Responsive Lightbox
    $('.venobox, .image-lightbox-link').venobox({
    numeratio: true
    }); 

        //Portfolio Engine
    $('#grid').mixitup({
      transitionSpeed : 800
    });



    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });


    //Highlight the navigation on focusing a section
   $('.standard-nav li > a').click(function(){
        $('.standard-nav li > a').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('.page, .intro').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.standard-nav li > a').removeClass('highlighted');
        $('#'+sectionId+'-linker').addClass('highlighted');
    });

    //Setup waypoints plugin
    $('.page').first().waypoint(function (event, direction) {

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
          $('.standard-header').slideDown();
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
          $('.standard-header').slideUp();
        }

    }, { offset: 100 });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

