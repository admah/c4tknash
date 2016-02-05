(function ($) {
Drupal.behaviors.agencyTheme = {
  attach: function (context) {
    // Replace cbpAnimatedHeader.js
    $(window).scroll(function(){ console.log(location.pathname);
        if ($(this).scrollTop() > 200 || location.pathname == '/code-of-conduct.html' || location.pathname == '/challenges.html' || location.pathname == '/awards.html' || location.pathname == '/api.html'){
            $('.navbar-default').addClass('navbar-shrink');
        }
        else{
            $('.navbar-default').removeClass('navbar-shrink');
        }
    });

    // Hide the responive menu when clicking in a menu item
    $('#navbar .navbar-collapse ul li a').click(function() {
        $('#navbar button.navbar-toggle:visible').click();
    });
  }
};
})(jQuery);