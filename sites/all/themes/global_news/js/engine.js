jQuery(document).ready(function(){
	  jQuery('.view-ediciones .views-row').each(function(){
    	var url1 = jQuery(this).find('.taxonomy-term h2 a').css('color','red').attr('href').replace('ediciones','sanguis');
    	console.log(url1);
  });
});