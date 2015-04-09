if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	//execute for handheld
}else{
	var isScrolling = false;
	
	var snapDuration = 200;
	var snapDelay = 400;
	var limit = 150;
	
	snapToTop('html,body','#work','#services','#about');
	
	$(window).on('scroll', function() {
		$('html,body').clearQueue();
	    isScrolling = true;
	});
	    
	function snapToTop() {
		this.targets = arguments;
		refreshTimer = setInterval( function(){ doTheSnap(this.targets); },snapDuration);
		function doTheSnap(targets) {
			for (var i=0; i<targets.length; i++){	
				var currentPosition = Math.abs($(window).scrollTop()-$(targets[i]).offset().top);
				if (!isScrolling && currentPosition>0 && currentPosition<=limit){
				    $('html,body').delay(snapDelay).animate({scrollTop: $(targets[i]).offset().top},snapDuration);
				}
			}
		    isScrolling = false;
		}
	}
}
