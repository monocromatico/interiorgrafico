jQuery(window).load(function(){
	  jQuery('.view-ediciones .views-row').each(function(){
    	jQuery(this).find('a').attr('href').replace('ediciones','sanguis').css('color','red');
    	console.log(url1);
  });
});