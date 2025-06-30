$(window).on('load', function() {

    $('.mdl-grid-slide').each(function() {
        var o = $(this);
        var swiperGridSlide;

        if ($(window).width() <= media_laptop) {
            swiperGridSlide = createswiperGridSlide(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_laptop) {

                if (swiperGridSlide) {
                    swiperGridSlide.destroy();
                    swiperGridSlide = undefined;
                }

            } else {

                if (!swiperGridSlide) {
                    swiperGridSlide = createswiperGridSlide(o);
                }
            }
        });
    });
});

function createswiperGridSlide(element){

    var swiper = new Swiper(element.find('.m-content')[0], {
        slidesPerView: 'auto',
        spaceBetween: 24,
        pagination: {
            el: element.find('.m-pagination')[0],
        },
    });

    return swiper;
}