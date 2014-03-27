jQuery(window).load(function(){
     jQuery('.view-ediciones .views-row').each(function(){
  		var urleditions = jQuery(this).find('a').attr('href').replace('ediciones','edicion');
   		jQuery(this).find('a').attr('href',urleditions);
  });


});

(function ($) {

	/*IG Front*/
     
     $('.view-id-ig_front .views-row').each(function(){
     	var labelAutores = '<span class="labelautores">Autores: </span>';
     	$(this).find('.views-field-field-autores div.field-content').prepend(labelAutores);

     	var autores = $(this).find('.views-field-field-autores div.field-content').html();
     	$(this).find('.views-field-created').append(autores)
     	$(this).find('.views-field-field-autores').html('');
     });

     $('.view-id-ig_front .view-footer a').attr('href').replace('ediciones','edicion').text('Ver más');


})(jQuery);