/**
 *
 */
(function ($) {

  Drupal.behaviors.styleswitcher = {
    attach: function (context, setings) {

      $('.style-switcher', context).click(function() {
        this.blur();

        var name = $(this).attr('data-rel');
        var enableOverlay = Drupal.settings.styleSwitcher.enableOverlay;

        if(enableOverlay){
          var overlay = Drupal.styleSwitcher.buildOverlay();

          overlay.fadeIn('slow', function() {
            Drupal.styleSwitcher.switchStyle(name);
            overlay.fadeOut('slow', Drupal.styleSwitcher.killOverlay);
          });
        }
        else {
          Drupal.styleSwitcher.switchStyle(name);
        }
        return false;
      });

      /**
       * Style Switcher class
       */
      Drupal.styleSwitcher = {
        /**
         * Main workhorse of the class.  Given the title of a stylesheet, do the switch
         */
        switchStyle: function(name) {
          var choice = Drupal.settings.styleSwitcher.choices[name];
          $('#styleswitcher-css').attr('href', Drupal.settings.basePath + choice.path);

          $.cookie('styleswitcher', name, {
            path: Drupal.settings.basePath,
            // The cookie should "never" expire.
            expires: 36500
          }
          );
          
            $('.style-switcher').removeClass('active')
            .filter('[data-rel="' + name + '"]').addClass('active');
        },

        /**
        
         */
        buildOverlay: function() {
          var overlay = $('<div>')
            .attr('id', 'style-switcher-overlay')
            .appendTo($('body'))
            .hide()
            .css(
              {
                height:     '100%',
                width:      '100%',
                background: '#000000',
                position:   'absolute',
                top:        $(window).scrollTop(),
                left:       $(window).scrollLeft(),
                zIndex:     9999
              }
            );
          return overlay;
        },

        /**
         * Remove the overlay
         */
        killOverlay: function() {
          $('#style-switcher-overlay').remove();
        }


        }
      }

  };

}(jQuery));
