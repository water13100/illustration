
$(window).scroll(function(evt){
   
   if ($(window).scrollTop()>0)
   $(".navbar").removeClass("navbar-top");
  else
      $(".navbar").addClass("navbar-top");        
});




// ............


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.opacity = "0";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.opacity = "1";  
    setTimeout(carousel, 1500); 
}
// ....
$(document).ready(function() {
<<<<<<< Updated upstream:index.js
         // var s = skrollr.init(); 
		$(".fancybox").fancybox(
      { 
      'opacity': true,
            'overlayShow': false,
            'transitionIn': 'elastic',
          'transitionOut' : 'none' 
       });
       if(screen.width > 768){
         new skrollr().init();
      }
	});
=======
		$(".fancybox").fancybox();
    });
    
// ............
>>>>>>> Stashed changes:script.js
