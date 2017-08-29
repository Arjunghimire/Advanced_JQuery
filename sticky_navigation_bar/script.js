$(document).ready(function(){
	// define varible
	var navOffset, scrollPosition = 0;
	navOffset = $(".nav").offset().top;

	$(window).scroll(function(){
	    scrollPosition = $(window).scrollTop();

	    if(scrollPosition >= navOffset){
	    	$(".nav").addClass("fixed");
	    }
	    else{
	    	$(".nav").removeClass("fixed");
	    }

	});
});