(function($) {
    "use strict";

var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 50) {
            $("#sticky_funtion").removeClass("header_secfixed");
        } else {
            $("#sticky_funtion").addClass("header_secfixed");
        }
    });
    
	})(jQuery);