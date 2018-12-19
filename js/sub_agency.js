(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 56
  // });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict


$(function(){
  // sub_1
  // sub_2
  // sub_3
  $(".p_one").addClass('on');

  $("#p_card,#p_theme").hide();

  $(".p_one").click(function(){
    $(".p_two,.p_three,.p_four").removeClass("on");
    $(".p_one").addClass('on');
    $("#p_one").css("display","block");
    $("#p_card,#p_theme").css("display","none");
  });

  $(".p_two").click(function(){
    $(".p_one,.p_three,.p_four").removeClass("on");
    $(".p_two").addClass("on");
    $("#p_card").show();
    $("#p_one,#p_theme").hide();
  });

  $(".p_three").click(function(){
    $(".p_one,.p_two,.p_four").removeClass("on");
    $(".p_three").addClass("on");
    $("#p_theme").show();
    $("#p_one,#p_card").hide();
  });

  $(".p_four").click(function(){
    $(".p_one,.p_two,.p_three").removeClass("on");
    $(".p_four").addClass("on");
    $("#p_theme").show();
    $("#p_one,#p_card").hide();
  });
});
