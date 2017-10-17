console.log("Hello Resume!");


// This is to animate Hello! on clicled.
(function(){
    var animationName = "animated shake";
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $('.hello').on('click', function() {
    	$('#shakeHello').addClass(animationName).one(animationEnd, function() {
                $(this).removeClass(animationName);
        });
	});
})();


$('#top-button').click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


