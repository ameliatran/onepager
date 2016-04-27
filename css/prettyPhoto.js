(function($) {          
    $(document).ready(function(){                    
        
    });
})(jQuery);


$(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });