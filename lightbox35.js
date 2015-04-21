
jQuery(document).ready(function($) {

var current, size;  
 $('.lightboxX35').click(function(e) {  

   
    e.preventDefault();								// prevent default click event
    var image_href = $(this).attr("href"); 			// grab href from clicked element    
    var slideNum = $('.lightboxX35').index(this);	    // determine the index of clicked trigger

    // find out if #lightbox exists
    if ($('#slideshow').length > 0) {        
      // #lightbox exists
      $('#slideshow').fadeIn(6000);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                

// create HTML markup for lightbox window
      var lightbox =
          '<div id="slideshow" >' +
		  '<p title="close" id="lightboxX35Close">x</p>' +
          '<div class="nav">' +
          '<a class="prev slide-nav" title="Preview" id="lightboxX35Prev"><</a>' +
          '<a class="next slide-nav" title="Next;" id="lightboxX35Next">></a>' +
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
      $('#navbox').css("z-index", 0);
      
      // fill lightbox with .lightboxX35 hrefs in #imageSet
      $('#imageSet').find('.lightboxX35').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow').append(
          '<img src="' + $href + '">'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshow img').length;
    
    // hide all slide, then show the selected slide
    $('#slideshow img').hide();
    $('#slideshow img:eq(' + slideNum + ')').fadeIn(770);
    
    // set current to selected slide
    current = slideNum;
  });
  


//enter_13  //esc_27 //shift_16 //ctrl_17 //alt;  
$(document).keyup(function(e) {
  if ( e.keyCode == 27 || e.keyCode == 16 || e.keyCode == 17 ||   e.keyCode == 18 || e.keyCode == 46)   
  {$('#slideshow').remove(); }   
});


  
//Click anywhere on the page to get rid of lightbox window
// using .on() instead of .live(). more modern, and fixes event bubbling issues

$('body').on('click', '#slideshow', function() { 
 dest = current + 1;
    if (dest > size - 1) { dest = 0; }
     // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow img:eq(' + current + ')').fadeOut('slow');
    $('#slideshow img:eq(' + dest + ')').fadeIn('slow');
    
    // update current slide
    current = dest;
});


$('body').on('click', '#lightboxX35Close', function() { 
$('#slideshow').remove(); $('#navbox').css("z-index", 10);
});
   
 	
 
  // show/hide navigation when hovering over #slideshow
$('body').on(
	{ 	mouseenter: function() {    $('.nav').fadeIn(300);    }, 
		mouseleave: function() {    $('.nav').fadeOut(300);   }
	},'#slideshow');
  
  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    

    if ($this.hasClass('prev')) {
      dest = current - 1;
      if (dest < 0) {  dest = size - 1; }
	  
    } else {

    dest = current + 1;
    if (dest > size - 1) {
        dest = 0;
      }
    }
    
    // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow img:eq(' + current + ')').fadeOut(700);
    $('#slideshow img:eq(' + dest + ')').fadeIn(700);
    
    // update current slide
    current = dest;
  });


function changeImg(current, dest){
	// fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow img:eq(' + current + ')').fadeOut('slow');
    $('#slideshow img:eq(' + dest + ')').fadeIn('slow');
}

  
  $(document.documentElement).keyup(function (event) {  
    var $this = $(this);
    var dest;
    
  if (event.keyCode == 37 ) {
          dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
	  
changeImg(current, dest);
 // update current slide
 current = dest;	
   } 
  
  
  
  else if (event.keyCode == 39) {
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
	  
changeImg(current, dest);
 // update current slide
 current = dest;	  
  }
  
  });


  
});



	function fsheh(){
	$('#slideshow').remove();
	}
	
	$('#lightboxX35Close').click(function() {
	alert(12);
	$('#slideshow').remove();
	});
	
	
function appendStyle(styles) {
  var css = document.createElement('style');  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));  
  var reshi= document.getElementsByTagName("head")[0];if(!reshi){appendHEAD();alert(reshi+"1");}
  document.getElementsByTagName("head")[0].appendChild(css);
}


function appendHEAD(){ var hedA= document.createElement('head'); document.appendChild(hedA);}
var styles = '#slideshow { position: fixed; top: 0; left: 0; width: 100%; height: 720px; min-height:720px; background: rgba(0,0,0,0.96);}'+
'#slideshow  p { font-size:20px; font-family:Arial; position:fixed; z-index:999; cursor:pointer; padding:2px 6px 4px; border:2px solid white; right:10px; top:-5px; text-align:  right; color: #fff; background: black; border-radius:3px;}'+
'#slideshow img { position: relative; height: 104%; min-height:640px}'+
'.prev, .next {  z-index:5999; background: black; cursor:pointer; position: absolute; top: 45%;  padding: 16px ; color: #fff; text-decoration: none; font-weight:bold; position: absolute;font-size:60px;text-shadow:1px 1px 0px #444;}'+
'.next { right: 7px; border-radius:2px 15px 15px 2px; } .prev { left: 7px;  border-radius:15px 2px 2px 15px; }'+ '.prev:hover{background:white; color:black;}'+ '.next:hover{background:white; color:black;}'+
'.thumb{width: auto;height: 100px;margin:5px;}';

window.onload = function() { appendStyle(styles) };

