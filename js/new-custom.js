// ------------step-wizard-------------
$(document).ready(function() {
    // $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

        var target = $(e.target);
        console.log(target);
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function(e) {
        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);
        console.log('click');

    });
    $(".prev-step").click(function(e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });

    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
});



function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});
$(document).ready(function() {
    $(function() {
        $('#fullpage').fullpage({
            scrollingSpeed: 1000,
            fitToSection: true,
            loopHorizontal: false,
            anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eightSection', 'nineSection'],
            menu: '#menu',
            afterRender: function() {
                $('.fp-bg').each(function(index, item) {
                    $(item).attr('data-offy', $(item).height() * 0.6);
                    $(item).attr('data-offx', $(item).width() * 0.6);
                })
            },
            afterResize: function() {
                $('.fp-bg').each(function(index, item) {
                    $(item).attr('data-offy', $(item).height() * 0.6);
                    $(item).attr('data-offx', $(item).width() * 0.6);
                })
            },
            onLeave: function(origin, destination, direction) {
                if (direction == 'down') {
                    var y = $(origin.item).find('.fp-bg').attr('data-offy') || 0;
                    $(origin.item).find('.fp-bg').css('transform', 'translateY(' + y + 'px)');
                } else {
                    $(destination.item).find('.fp-bg').css('transform', 'translateY(0px)');
                }
            },
            /* onSlideLeave: function (section, origin, destination, direction) {
              if(direction == 'right') {

                  var x = $(origin.item).find('.fp-bg').attr('data-offx') || 0;
                  $(origin.item).find('.fp-bg').css('transform','translateX('+x+'px)');

              } else {
                  $(destination.item).find('.fp-bg').css('transform','translateX(0px)');
              }
            }*/
        });
    });
});












$(document).ready(function() {

    let isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
        $('body').on('click', '.section-4 .actions .btn', function() {

            $(this).siblings().removeClass('tip-show');
            if ($(this).hasClass('tip-show')) {
                console.log('remove');
                $(this).removeClass('tip-show');
            } else {
                $(this).addClass('tip-show');
                console.log('add');
            }
        });
        $(document).click(function() {
            var container = $(".section-4 .actions");
            if (!container.is(event.target) && !container.has(event.target).length) {
                container.children().removeClass('tip-show');
            }
        });
    }
    // console.log(isMobile);
    // if(!isMobile){


    $(window).on('load', function() {
        $('.section .animate-area  ').hide();
        setTimeout(() => {
            $('.section-1.active .animate:not(".animate-area ")').hide();
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