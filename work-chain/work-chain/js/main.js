$(function () {
	stickyHeader();

	//megaEqualHeight();

	//Window scroll funcation call
	$(window).scroll(function () {
		//Calls sticky header for desktop
		stickyHeader();
	});

	//Resize same height on window resize
	
	//Adds class to parent when nav is toggled
	$('.navbar-header button.navbar-toggle').click(function() {
		$('.navbar.navbar-default').toggleClass('open');
	});

	//Sticky header function for nav
	function stickyHeader() {
		if ($(this).scrollTop() > 100) {
			$('header').addClass('fixed').fadeIn(2000);
		} else {
			$('header').removeClass('fixed').fadeIn(2000);
		}
  	}

	});