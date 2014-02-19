jQuery(document).ready(function(){

  jQuery("#tools h3").click(function(e){

    e.preventDefault();
    var div = jQuery("#tools");
    
    if (div.css("left") === "-119px") {
      jQuery("#tools").animate({
        left: "0px"
      }); 
    } else {
      jQuery("#tools").animate({
        left: "-119px"
      });
    }
  })

var layout = jQuery.cookie('layout');

    if (layout && layout == 'fixed') {
      jQuery('body').addClass('fixed');
      jQuery('#tools .layout').removeClass('active');
      jQuery('#fixed-layout').addClass('active');
    }


jQuery('#tools a.layout').click(function() {
    var $this = jQuery(this);

    if ($this.hasClass('active')) { return false; }

    var layout = $this.text();

    if (jQuery('body').hasClass('fixed')) {jQuery('body').removeClass('fixed');}

    if (layout == 'fixed') {jQuery('body').addClass('fixed');}

    jQuery('#tools a.layout').removeClass('active');
    $this.addClass('active');
    jQuery.cookie('layout', layout);
    return false;
  });

});

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
jQuery(document).ready(function() { 
  if(jQuery.cookie("css")) {
    jQuery("#body").attr("rel",jQuery.cookie("css"));
  }
  jQuery("#display li a").click(function() { 
    jQuery("#body").attr("rel",jQuery(this).attr('rel'));
    jQuery.cookie("css",jQuery(this).attr('rel'), {expires: 365, path: '/'});
    return false;
  });
  jQuery('.form-submit.wishlist').attr('title', 'Add to wishlsit');
});

jQuery(function() {
// Scroll window to Top
  jQuery('#scroll_to_top').click(function() {
    jQuery('body,html').animate({
      scrollTop : 0
    });
    return false;
  });

  /* Show Code */
  jQuery('.show_code a').click(function() {
    jQuery(this).parent().toggleClass('show_code_active').parent().find('.code').slideToggle();
    return false;
  });

  // Tabs, cookie expires in days
  jQuery('.tabs2').tabs({
    cookie : {
      expires : 7
    }
  });

  jQuery('.accordions').accordion({
    autoHeight : false,
    navigation : true
  });

  jQuery('.toggle:not(.active) .toggle_content').hide();
  jQuery('.toggle .toggle_title').click(function() {
    jQuery(this).parent().find('.toggle_content').slideToggle();
    return false;
  });
   
});