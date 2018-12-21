$(document).ready(function() {

	$(".toggle_mnu, .modal_mnu a").click(function() {
		$(".sandwich").toggleClass("active");
		$(".modal_mnu, .presentation_inner").fadeToggle(500);
		$(".modal_mnu li").toggleClass("animated fadeInUp");
	});

	$(".presentation_inner h1").animated("fadeInDown", "fadeOutUp");
	$(".presentation_inner p, .s_head").animated("fadeInUp", "fadeOutDown");

	$(".introducing").animated("fadeInLeft", "fadeOutLeft");
	$(".photo").animated("flipInY", "flipOutY");
	$(".pers_info").animated("fadeInRight", "fadeOutRight");

	$(".logo_container").click(function() {
		$(this).addClass("animated hinge")
		.delay(3000)
		.queue(function() {
			$(this).removeClass("hinge");
			$(this).addClass("bounceInDown");
			$(this).dequeue();
		})
		.delay(1000)
		.queue(function() {
			$(this).removeClass("animated bounceInDown");
			$(this).dequeue();
		});
	});

	$(".port_item_descr_modal").each(function(i) {
		$(this).attr("id", "cell" + i);
		$(this).parent().find("a").attr("href", "#cell" + i);
	});


	$(".popup").magnificPopup({
		type:"inline",
		showCloseBtn: true
	});

});


$(window).load(function() { 
/*	$(".loader_inner").fadeOut(); 
	$(".loader").delay(200).fadeOut("slow");*/
	$(".page-loader-circle").fadeOut(); 
	$(".preloader").delay(200).fadeOut("slow");
	// $(".preloader").fadeOut("slow");

});