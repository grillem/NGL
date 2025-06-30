$(window).on('load', function() {

    $('.mdl-hero-hotel').each(function() {
        var o = $(this),
            swiperHeroHotel;

        swiperHeroHotel = createswiperHeroHotel(o);

        function updateCursor(e) {
            var offset = o.offset(),
                width = o.width(),
                x = e.pageX - offset.left,
                cursorClass = '';
            
            if (jQuery(e.target).is('a')) {
                o.css('cursor', 'pointer');
                return;
            }

            if (x < width / 2) {
                cursorClass = 'css-cursor-left';
            } else {
                cursorClass = 'css-cursor-right';
            }
    
            o.removeClass('css-cursor-left css-cursor-right').addClass(cursorClass);
        }

        o.on('mousemove', updateCursor);

        o.on('click', function (e) {

            if(jQuery(window).width() > media_desktop){

                var offset = o.offset(),
                    width = o.width(),
                    x = e.pageX - offset.left;
    
                if (jQuery(e.target).is('a')) return;
    
                if (x < width / 2) {
                    swiperHeroHotel.slidePrev();
                } else {
                    swiperHeroHotel.slideNext();
                }
            }
        });

        jQuery(window).on('resize', function () {
            o.trigger('mousemove');
        });
    });
});

function createswiperHeroHotel(element){

    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: 1,
        speed: 1400,
        navigation: {
            prevEl: element.find('.m-left')[0],
            nextEl: element.find('.m-right')[0],
        },
        scrollbar: {
          el: ".m-pagination",
          hide: true,
        },
    });

    return swiper;
}