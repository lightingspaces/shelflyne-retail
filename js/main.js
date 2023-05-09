$(function() {
  


  // preload spinner

  $(window).on('load', function(){
    $("#preloader").delay(2000).fadeOut("slow");
  });




  // "back to top" button //

  if ($(window).width() < 801) {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 600) {
        $('#back-to-top').addClass('backToTop-reveal');
      }
      else {
        $('#back-to-top').removeClass('backToTop-reveal');
      }
    });
  }
  else {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 2500) {
        $('#back-to-top').addClass('backToTop-reveal');
      }
      else {
        $('#back-to-top').removeClass('backToTop-reveal');
      }
    });
  }

  $(window).resize(function () {
    if ($(window).width() < 801) {
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 600) {
          $('#back-to-top').addClass('backToTop-reveal');
        }
        else {
          $('#back-to-top').removeClass('backToTop-reveal');
        }
      });
    }
    else {
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 2500) {
          $('#back-to-top').addClass('backToTop-reveal');
        }
        else {
          $('#back-to-top').removeClass('backToTop-reveal');
        }
      });
    }
  });




  // Menu  

  var $hamburger = $(".hamburger");

  $( "#slideout-toggle" ).click(function() {
    $('body').toggleClass( "slideout-open" );
  });

  $( ".menu-section-list a" ).click(function() {
    $('body').toggleClass( "slideout-open" );
    $hamburger.removeClass("is-active");
  });
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  var $menuLink = $(".menu a");
  $menuLink.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".slideout-menu").hasClass("show");
    if (_opened === true) {
        $("#slideout-toggle").click();
    }
  });


  

  







  // product variation switcher

  // #scene05, toggle 'variation1' classes
  $('.variations-panel .variation').on('click', function (e) {
    var bgClass1 = $(this).data("variation");
    // button active state
    $(this).addClass( "active" ).siblings().removeClass('active');
    // for desktop
    $('.desktop-variations').removeClass(function (index, css) {
      return (css.match (/(^|\s)variation1\S+/g) || []).join(' ');
    }).addClass(bgClass1);
    // // for mobile
    $('.mobile-variations').removeClass(function (index, css) {
      return (css.match (/(^|\s)variation1\S+/g) || []).join(' ');
    }).addClass(bgClass1);
  });

  // #scene05, toggle 'variation2' classes
  $('.variations-arms .variation').on('click', function (e) {
    var bgClass2 = $(this).data("variation");
    // button active state
    $(this).addClass( "active" ).siblings().removeClass('active');
    // for desktop
    $('.desktop-variations').removeClass(function (index, css) {
      return (css.match (/(^|\s)variation2\S+/g) || []).join(' ');
    }).addClass(bgClass2);
    // // for mobile
    $('.mobile-variations').removeClass(function (index, css) {
      return (css.match (/(^|\s)variation2\S+/g) || []).join(' ');
    }).addClass(bgClass2);

  });





  // change header background when scrolling to footer

  $(document).scroll(function(){
    var el = $('#navbar'),
        top = $('#footer').offset().top - $(document).scrollTop();
    if (top < 100 && !el.is('.bg-white')){
        $(el).addClass('bg-white');
    }
    if (top > 100 && el.is('.bg-white')){
        $(el).removeClass('bg-white');
    }  
});






  // https://github.com/cferdinandi/smooth-scroll

  var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)
    topOnEmptyHash: false, // Scroll to the top of the page for links with href="#"

    // Speed & Duration
    speed: 1000, // Integer. Amount of time in milliseconds it should take to scroll 1000px
    speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
    durationMax: null, // Integer. The maximum amount of time the scroll animation should take
    durationMin: null, // Integer. The minimum amount of time the scroll animation should take
    clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
    
    // Easing
    easing: 'linear', // Easing pattern to use

    // History
    updateURL: false, // Update the URL on scroll
    popstate: false // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
  });



  // fade sections in / out as enter / leave viewport
  // https://stackoverflow.com/questions/43259623/fade-out-section-on-page-top-fade-in-on-bottom
  
  var fadings = $(".scene-content");

  $(window).scroll(function(){ 

    var vpheight = document.documentElement.clientHeight;
    fadings.each(function(){
      var r = this.getBoundingClientRect();  
      var thisHeight = $(this).height();
      if(thisHeight + r.top < 0 || r.top > vpheight) return true;
      var opacity = Math.max(0, Math.min(1, (r.top >= 0 ? vpheight - r.top : $(this).height() - Math.abs(r.top)) / vpheight));
      $(this).css("opacity", opacity);
    });

  });



  // hide '.destop-variations' if scrolling back UP page
  var lastScrollTop = 0;
  
	$(window).scroll(function(event){

		var st = $(this).scrollTop();
		if (st < lastScrollTop){
			$('.desktop-variations').removeClass(function (index, css) {
			return (css.match (/(^|\s)variation1\S+/g) || []).join(' ');
			});
			$('.desktop-variations').removeClass(function (index, css) {
			return (css.match (/(^|\s)variation2\S+/g) || []).join(' ');
			});
		}
    lastScrollTop = st;
    
  });
  

  



});








// contact form

(function($) {
  "use strict"; // Start of use strict

  $(window).on('load', function(){
    $("#preloader").delay(2000).fadeOut("slow");
  });

  // Detect when form-control inputs are not empty
  $(".rp-contactForm .form-control").on("input", function() {
    if ($(this).val()) {
      $(this).addClass("hasValue");
    } else {
      $(this).removeClass("hasValue");
    }
  });


  // var $hamburger = $(".hamburger");
  // $hamburger.on("click", function(e) {
  //   $hamburger.toggleClass("show");
  //   $('body').removeClass('slideout-open');
  // });

  var $menuLink = $(".menu a");
  $menuLink.on("click", function(e) {
    $('body').removeClass('slideout-open');
  });


})(jQuery); // End of use strict



