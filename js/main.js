$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('#upbtn').fadeIn();
		} else {
			$('#upbtn').fadeOut();
		}
	});

$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#panelFixed').addClass( "fixedPanel" );
		} else {
			$('#panelFixed').removeClass( "fixedPanel" );
		}
	});



//Click event to scroll to top
	$('#upbtn').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

$('.close').click(function () {
$( ".modal" ).fadeOut();
$( ".navbar-fixed-top" ).fadeIn();
return false;
});
$('.product_img').click(function () {
$(".navbar-fixed-top").fadeOut();

var src1 = $(this).attr('src');
$('.modal-content').attr('src',src1);
var captionText = $(this).attr('alt');	
$('.caption').html(captionText);
$( ".modal" ).fadeIn();
return false;

});
$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});
    
});
  $('.bxslider').bxSlider({
  
  		  	speed: 900,
  		  	slideWidth: 1500,
            auto: true,
           	pager: false,
           	minSlides: 2,
  			maxSlides: 3,
  			mode: 'fade',
		   captions: true,
		   pagerCustom: '#bx-pager',
		   adaptiveHeight: true,
		   slideWidth: 300,
		   controls: false
});
               


    

$('.closeMy').click(function () {
$( ".modal" ).fadeOut();
return false;
});
$('.product_img').click(function () {
$(".navbar-fixed-top").fadeOut();

var src1 = $(this).attr('src');
$('.modal-content').attr('src',src1);
var captionText = $(this).attr('alt');	
$('.caption').html(captionText);
$( ".modal" ).fadeIn();
return false;
});

});