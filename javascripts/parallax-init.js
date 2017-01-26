

if( !device.tablet() && !device.mobile() ) {

            /* if non-mobile device is detected*/ 
              // Parallax Init
              $('.parallax').each(function() {
                    $(this).parallax('0', -0.3, true);
                });
                        
        } else {
            
            /* if mobile device is detected*/ 
            $('.slide').addClass('parallax-off');
        }


