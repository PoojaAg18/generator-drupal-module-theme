(function ($) {
  Drupal.behaviors.<%= theme_name %> = {
    attach: function (context, settings) {
      $('body', context).click(function () {
        console.log('Hello world!')
      });
    }
  };

})(jQuery);
