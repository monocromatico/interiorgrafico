jQuery(window).load(function(){
     jQuery('.view-ediciones .views-row').each(function(){
  		var urleditions = jQuery(this).find('a').attr('href').replace('ediciones','edicion');
   		jQuery(this).find('a').attr('href',urleditions);
  });


});

(function ($) {
     
     $('.view-id-ig_front .views-row').each(function(){
     	var labelAutores = '<span class="labelautores">Autores: </span>';
     	$(this).find('.views-field-field-autores div.field-content').prepend(labelAutores);

     	var autores = $(this).html('.views-field-field-autores div.field-content');
     	$(this).find('.views-field-created').append(autores)
     });

})(jQuery);