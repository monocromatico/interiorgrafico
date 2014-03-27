jQuery(window).load(function(){
     jQuery('.view-ediciones .views-row').each(function(){
  		var urleditions = jQuery(this).find('a').attr('href').replace('ediciones','edicion');
   		jQuery(this).find('a').attr('href',urleditions);
  });


});

(function ($) {
     $('.view-id-ig_front .views-row').each(function(){
     	var labelAutores = '<span label="autores">Autores:</span>';
     	$(this).find('.views-field-field-autores div.field-content').prepend(labelAutores);
     });
})(jQuery);