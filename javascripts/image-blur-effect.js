


/*global $:false */
/*global window: false */

(function(){
  "use strict";

       function fader() {
                var r = $('.blurred'),
                    wh = $(window).height(),
                    dt = $(document).scrollTop(),
                    elView, opacity;
                
                // Loop elements with class "blurred"
                r.each(function() {
                    elView  = wh - ($(this).offset().top - dt + 280);
                    if (elView > 0) { // Top of DIV above bottom of window.
                        opacity = 1 / (wh + $(this).height()) * elView * 3
                        if (opacity < 1) // Bottom of DIV below top of window.
                            $(this).css('opacity', opacity);
                    }
                    
                });
            }

            
$(function ($) {

        if( !device.tablet() && !device.mobile() ) {

            /*  if non-mobile device is detected*/ 
            $('.regular').css('opacity','1');
            $('.blurred').css('opacity','0');
            $(document).bind('scroll', fader);
                        
        } else {
            
            /*  if mobile device is detected*/ 
            $('.regular').css('visibility','hidden !important');
            $('.regular').hide();
            $('.blurred').css('opacity','1 !important');
            
        }
        
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







    

