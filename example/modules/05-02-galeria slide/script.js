$(window).on('load', function() {

    $('.mdl-galeria-slide').each(function() {
        var o = $(this),
            swiperGaleriaSlide1,
            swiperGaleriaSlide2;

        swiperGaleriaSlide1 = createswiperGaleriaSlide1(o);
        swiperGaleriaSlide2 = createswiperGaleriaSlide2(o);

        swiperGaleriaSlide1.on('slideChange', function () {
            var activeIndex = swiperGaleriaSlide1.activeIndex;
            swiperGaleriaSlide2.slideTo(activeIndex);
        });
    });
});

function createswiperGaleriaSlide1(element){

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

function createswiperGaleriaSlide2(element){

    var swiper = new Swiper(element.find('.m-slide-content2')[0], {
        slidesPerView: 1,
        spaceBetween: 0,
    });

    return swiper;
}