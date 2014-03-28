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

if ($('body').hasClass('front')){
	function frontpageEngine(){
		console.log('(ノ°□°)ノ彡┻━┻');
	     var footerView = $('.view-id-ig_front .view-footer a').attr('href').replace('ediciones','edicion');
	     $('.view-id-ig_front .view-footer a').text('Todos los artículos de esta edicion').attr('href',footerView);
	}
	
	frontpageEngine();
}else{
	console.log('┬─┬ノ(º_ºノ)')
}

/*Print Links Relocation*/
	var printLink = $('body.node-type-articulo').find('span.print-link').html();
	$('body.node-type-articulo #block-views-articuo-data-block .view .view-content .views-row').append(printLink).addClass('node-data');
})(jQuery);