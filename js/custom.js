// ------------step-wizard-------------
$(document).ready(function () {
  // $('.nav-tabs > li a[title]').tooltip();

  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var target = $(e.target);
    console.log(target);
    if (target.parent().hasClass('disabled')) {
      return false;
    }
  });

  $(".next-step").click(function (e) {

    var active = $('.wizard .nav-tabs li.active');
    active.next().removeClass('disabled');
    nextTab(active);
    console.log('click');

  });
  $(".prev-step").click(function (e) {

    var active = $('.wizard .nav-tabs li.active');
    prevTab(active);

  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function () {
  $('.nav-tabs li.active').removeClass('active');
  $(this).addClass('active');
});


$(document).ready(function () {

  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu 
  $header_top.find('a').on('click', function () {
    $(this).parent().toggleClass('open-menu');
  });



  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F', "#B8B89F", "#B8B89F"],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection'],
    menu: '#menu',

    afterLoad: function (anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 5) {
        $('#fp-nav').hide();
      }

      // history.pushState(null, null, " ");
    },

    onLeave: function (index, nextIndex, direction) {
      if (index == 5) {
        $('#fp-nav').show();
      }
      // history.pushState(null, null, " ");
      setTimeout(() => {
        $('.section-2.active .animate:first-child').hide();
      }, 2000);
      setTimeout(() => {
        $('.section-2.active .animate-area  ').show();
        $('.section-2.active .animate-area  ').addClass('starting');
      }, 2100);
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      if (anchorLink == 'seventhSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
        $nav.css('background', 'transparent');
        $(this).css('background', '#374140');
        $(this).find('h2').css('color', 'white');
        $(this).find('h3').css('color', 'white');
        $(this).find('p').css({
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        });
      }
    },

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {
      if (anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    }
  });
  $.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);







});






$(document).ready(function () {
  $(window).on('load', function () {
    $('.vertical-scrolling .animate-area  ').hide();
    $('.vertical-scrolling .animate-area-2  ').hide();
    setTimeout(() => {
      $('.section-1.active .animate:first-child').hide();
    }, 2000);
    setTimeout(() => {
      $('.section-1.active .animate-area  ').show();
      $('.section-1.active .animate-area  ').addClass('starting');
    }, 2100);
    setTimeout(() => {
      $('.section-1.active .starting  .title ').addClass('SlideInLeftRemove');

    }, 4000);
    setTimeout(() => {
      $('.section-1.active  ').addClass('green');

    }, 5000);

  });

});

$(window).scroll( function () {
  var scrollActive = $('.vertical-scrolling.active');
    console.log('scrollActive');
   
  
    });