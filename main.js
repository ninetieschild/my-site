if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	//execute for handheld
}else{
	//execute for desktop

	$(function() {
	    $(window).stellar({
	    	horizontalScrolling: false,
	    	  verticalScrolling: true,
	    	    verticalOffset: 50,
	    	    hideDistantElements: false,
	    });
	});
	
	$('a.logo').click(function() {
		$('body,html').stop(true).animate({scrollTop:this}, 500);
	});

	$('#intro span').each(function(index){
	        $(this).hide().delay(20*index+500).fadeIn(500);
	    });
		
	$('#navbox').addClass('start');
	$('#navboxplace').addClass('start');

	$('#services').addClass('jsenabled');
	$('#map').addClass('jsenabled');
	
}
$(function() {
	var $window = $(window);
	$window.bind("scroll resize", function() {
	    var scrollTop = $window.scrollTop();        
		if(scrollTop < $('#navboxplace').offset().top){
		    $('#navbox').addClass('start');
		} else {
		    $('#navbox').removeClass('start');
		}

		if(scrollTop < $('#navbox').offset().top-25){
		    $('.logobox').removeClass("locklogo");
		} else {
		    $('.logobox').addClass("locklogo");
		}

		var slowness = 8;
		if(scrollTop > $('#services').offset().top-$(window).height()+300 && scrollTop < $('#about').offset().top-$(window).height()+$('#cogs').height()){
			$('#cog1').css({ '-webkit-transform': 'rotate(' + (scrollTop/slowness*0.9) + 'deg)'});
			$('#cog2').css({ '-webkit-transform': 'rotate(' + -(scrollTop/slowness*2.7) + 'deg)'});
			$('#cog3').css({ '-webkit-transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog4').css({ '-webkit-transform': 'rotate(' + -(scrollTop/slowness*1.3) + 'deg)'});
			$('#cog5').css({ '-webkit-transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog6').css({ '-webkit-transform': 'rotate(' + -(scrollTop/slowness*0.9) + 'deg)'});
			$('#cog7').css({ '-webkit-transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog8').css({ '-webkit-transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog9').css({ '-webkit-transform': 'rotate(' + -(scrollTop/slowness) + 'deg)'});
			$('#cog1').css({ '-moz-transform': 'rotate(' + (scrollTop/slowness*0.9) + 'deg)'});
			$('#cog2').css({ '-moz-transform': 'rotate(' + -(scrollTop/slowness*2.7) + 'deg)'});
			$('#cog3').css({ '-moz-transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog4').css({ '-moz-transform': 'rotate(' + -(scrollTop/slowness*1.3) + 'deg)'});
			$('#cog5').css({ '-moz-transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog6').css({ '-moz-transform': 'rotate(' + -(scrollTop/slowness*0.9) + 'deg)'});
			$('#cog7').css({ '-moz-transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog8').css({ '-moz-transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog9').css({ '-moz-transform': 'rotate(' + -(scrollTop/slowness) + 'deg)'});
			$('#cog1').css({ '-o-transform': 'rotate(' + (scrollTop/slowness*0.9) + 'deg)'});
			$('#cog2').css({ '-o-transform': 'rotate(' + -(scrollTop/slowness*2.7) + 'deg)'});
			$('#cog3').css({ '-o-transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog4').css({ '-o-transform': 'rotate(' + -(scrollTop/slowness*1.3) + 'deg)'});
			$('#cog5').css({ '-o-transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog6').css({ '-o-transform': 'rotate(' + -(scrollTop/slowness*0.9) + 'deg)'});
			$('#cog7').css({ '-o-transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog8').css({ '-o-transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog9').css({ '-o-transform': 'rotate(' + -(scrollTop/slowness) + 'deg)'});
			$('#cog1').css({ 'transform': 'rotate(' + (scrollTop/slowness*0.9) + 'deg)'});
			$('#cog2').css({ 'transform': 'rotate(' + -(scrollTop/slowness*2.7) + 'deg)'});
			$('#cog3').css({ 'transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog4').css({ 'transform': 'rotate(' + -(scrollTop/slowness*1.3) + 'deg)'});
			$('#cog5').css({ 'transform': 'rotate(' + (scrollTop/slowness) + 'deg)'});
			$('#cog6').css({ 'transform': 'rotate(' + -(scrollTop/slowness*0.9) + 'deg)'});
			$('#cog7').css({ 'transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog8').css({ 'transform': 'rotate(' + (scrollTop/slowness*2.7) + 'deg)'});
			$('#cog9').css({ 'transform': 'rotate(' + -(scrollTop/slowness) + 'deg)'});
		}
	});

});

$('.cover').hover(function(){ $('.cover').addClass('hover'); },function(){ $('.cover').removeClass('hover'); });


