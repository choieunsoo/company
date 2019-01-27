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

  // sub1
  $(".btn1").addClass("active");
  $(".mon").hide();
  $(".mon1").show();

  $(".btn1").click(function(){
    $(".btn").removeClass("active");
    $(".btn1").addClass("active");
    $(".mon").hide();
    $(".mon1").show();
  });
  $("#btn1").click(function(){
    // $("btn").removeClass("active");
    // $(".btn1").addClass("active");
    $(".mon").hide();
    $(".mon1").show();
  });
  $("#btn2").click(function(){
    // $("btn").removeClass("active");
    // $(".btn1").addClass("active");
    $(".mon").hide();
    $(".mon2").show();
  });

  $(".btn2").click(function(){
    $(".btn").removeClass("active");
    $(".btn2").addClass("active");
    $(".mon").hide();
    $(".mon2").show();
  });

  $(".btn3").click(function(){
    $(".btn").removeClass("active");
    $(".btn3").addClass("active");
    $(".mon").hide();
    $(".mon3").show();
  });

  $(".btn4").click(function(){
    $(".btn").removeClass("active");
    $(".btn4").addClass("active");
    $(".mon").hide();
    $(".mon4").show();
  });

  $(".btn5").click(function(){
    $(".btn").removeClass("active");
    $(".btn5").addClass("active");
    $(".mon").hide();
    $(".mon5").show();
  });

  $(".btn6").click(function(){
    $(".btn").removeClass("active");
    $(".btn6").addClass("active");
    $(".mon").hide();
    $(".mon6").show();
  });

  $(".btn7").click(function(){
    $(".btn").removeClass("active");
    $(".btn7").addClass("active");
    $(".mon").hide();
    $(".mon7").show();
  });

  // sub2
  var h3 = $("#about #head h3");
  var nav = $(".nav");
  var navPos = h3.offset().top;

  var menu = $("#about ul.nav>li");
  var link = $("#about ul.nav>li>a");
  var contents = $(".contents");
  
  menu.click(function(){
    var i = $(this).index();

    // link.removeClass("active");
    // link.eq(i).addClass("active");

    var tt = contents.eq(i).offset().top;
    $("html,body").stop().animate({scrollTop:tt},1000);


  });

  $(window).on("scroll",function(){
    var page = window.pageYOffset;
    console.log(page);

    if(page > navPos){
      nav.addClass("fixed");
    }else{
      nav.removeClass("fixed");
    }

    contents.each(function(i){
      if(page >= $(this).offset().top){
        link.removeClass("active");
        link.eq(i).addClass("active");
      }      
    });
  });


  // sub3

  // sub4

  // sub5

});



