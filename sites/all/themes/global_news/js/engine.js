jQuery(window).load(function(){
	  jQuery('.view-ediciones .views-row').each(function(){
    	var url1 = jQuery(this).find('a').attr('href');
    	$(url1).replace('ediciones','sanguis').css('color','red');
    	console.log(url1);
  });
});