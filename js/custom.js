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
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F', "#B8B89F", "#B8B89F", "#B8B89F", "#B8B89F"],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eightSection', 'nineSection'],
    menu: '#menu',

    afterLoad: function (anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 5) {
        $('#fp-nav').hide();
      }
      history.pushState(null, null, " ");
      // console.log(index);
      if (index.isFirst) {
        // console.log('true');
        $('.vertical-scrolling.section-1 ').removeClass('green');
        $('.section-1 .animate-area  ').removeClass('starting');
        $('.section-1 .starting  .title ').removeClass('SlideInLeftRemove');
        $('.vertical-scrolling.section-1 .animate').show();
        $('.section-1 .animate-area  ').hide();
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



      }



    },

    onLeave: function (index, nextIndex, direction, anchorLink) {
      if (index == 5) {
        // $('#fp-nav').show();
        // console.log('true');
        debugger;
      }
      if (index == 1) {
        console.log(nextIndex);
        $('#menu li:first-child').addClass('active');
      }
      history.pushState(null, null, " ");






      setTimeout(() => {
        $('.section-2.active .animate:first-child').hide();
      }, 2000);
      setTimeout(() => {
        $('.section-2.active .animate-area  ').show();
        $('.section-2.active .animate-area  ').addClass('starting');
      }, 2100);
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      // console.log( slideAnchor, index);
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
  $.fn.fullpage.setMouseWheelScrolling(true);
  $.fn.fullpage.setAllowScrolling(true);







});






$(document).ready(function () {

  $('body').on('click', '.btn-claim', function (e) {
    // e.preventDefault();
    setTimeout(() => {
      $('#step1 .next-step').trigger('click');
    }, 1200);
  });


  let isMobile = window.matchMedia("(max-width: 767px)").matches;
  if (isMobile) {
    $('body').on('click', '.section-4 .actions .btn', function () {

      $(this).siblings().removeClass('tip-show');
      if ($(this).hasClass('tip-show')) {
        console.log('remove');
        $(this).removeClass('tip-show');
      } else {
        $(this).addClass('tip-show');
        console.log('add');
      }
    });
    $(document).click(function () {
      var container = $(".section-4 .actions");
      if (!container.is(event.target) && !container.has(event.target).length) {
        container.children().removeClass('tip-show');
      }
    });
  }
  // console.log(isMobile);
  // if(!isMobile){


  $(window).on('load', function () {
    $('.vertical-scrolling .animate-area  ').hide();
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
  // }



});