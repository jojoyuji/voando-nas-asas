$(function(){
  $("h1").fitText(1.8);
  $(".wrapper-header").fitText(3.3);

  var top = $('.top-header');
  var reduced = false;

  document.addEventListener("touchmove", scrollStart, false);
  document.addEventListener("scroll", scroll, false);


  function scrollStart() {
    //start of scroll event for iOS
    scroll();
  }

  function scroll() {
    //end of scroll event for iOS
    //and
    //start/end of scroll event for other browsers
    //

    var st = $(this).scrollTop();
    //top.css({ 'height' : ((90 - st <20)? 10 : 90-st) });
    //if (st> areas.header.h && st<areas.purpose.h){
      //console.log(st);
      //console.log("premero");
      //$('.nav-bullets a').not(areas.header.e).removeClass('active');
      //$(areas.header.e).addClass('active');
      //}
      //else if (st> areas.purpose.h && st< areas.prepare.h){
        //$('.nav-bullets a').not(areas.purpose.e).removeClass('active');
        //$(areas.purpose.e).addClass('active');
        //}
        //else if (st> areas.prepare.h){
          //$('.nav-bullets a').not(areas.prepare.e).removeClass('active');
          //$(areas.prepare.e).addClass('active');
          //}

          //logo effect on scroll
          if(st > 50 && !reduced) {
            top.addClass('reduced').find('img').addClass('reduced');
            reduced = true;
          }
          else if(st < 50 && reduced) {
            top.removeClass('reduced').find('img').removeClass('reduced');
            reduced = false;
          }
          //change opacity
          //text_header.css({ 'opacity' : 1 - (st/400) });
  }

  $('a[href*=#]:not([href=#])').click(function() {

    //nav-bullets
    $(this).addClass('active');
    $('.nav-bullets a').not(this).removeClass('active');

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 70
      }, 500);
      return false;
    }
    }
  });
});


