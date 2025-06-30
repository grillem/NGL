$(window).on('load', function() {

    $('.mdl-destacado-slide-completo').each(function() {
        var o = $(this),
            swiperDestacadoSlideCompleto1,
            swiperDestacadoSlideCompleto2;

        swiperDestacadoSlideCompleto1 = createswiperDestacadoSlideCompleto1(o);
        swiperDestacadoSlideCompleto2 = createswiperDestacadoSlideCompleto2(o);

        swiperDestacadoSlideCompleto1.on('slideChange', function () {
            var activeIndex = swiperDestacadoSlideCompleto1.activeIndex;
            swiperDestacadoSlideCompleto2.slideTo(activeIndex);
        });
    });
});

function createswiperDestacadoSlideCompleto1(element){

    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: element.find('.m-left')[0],
            nextEl: element.find('.m-right')[0],
        },
        pagination: {
            el: element.find('.m-pagination')[0],
        }
    });

    return swiper;
}

function createswiperDestacadoSlideCompleto2(element){

    var swiper = new Swiper(element.find('.m-slide-content2')[0], {
        slidesPerView: 1,
        spaceBetween: 0,
    });

    return swiper;
}