jQuery(window).load(function(){
     jQuery('.view-ediciones .views-row').each(function(){
  		var urleditions = jQuery(this).find('a').attr('href').replace('ediciones','edicion');
   		jQuery(this).find('a').attr('href',urleditions);
  });

     jQuery('.view-id-ig_front .views-row ').each(function(){
     	var labelAutores = 'Autores:';
     	jQuery(this).find('.views-label-field-autores div.field-content').prepend(labelAutores);
     });
});