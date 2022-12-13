function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// Wait for window load
$(window).load(function() {

    
	$(".page_load").css('display', 'flex')
	$("#outer").css('display', 'none')
	$("#cookies").css('display', 'none')

	//check the device
	//if (isMobileDevice()) {
//	return
//	}
	//


	$(".page_load").css({opacity: 1, display: "flex"}).animate({opacity: 0}, 500);
	$('.page_load').promise().done(function() {
		$(".page_load").css({display: 'none'})
		$("#outer").css({opacity: 0, display: "block"}).animate({opacity: 1}, 300);
		//Checking the cookie state
		$('#outer').promise().done(function() {
			if (!getCookie("remove_title")) {
				$("#cookies").css({opacity: 0, display: "flex"}).animate({opacity: 1}, 300);
			}
		})
	})
});
