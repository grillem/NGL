$(window).on('load', function() {

    $('.mdl-destacado-slide-simple').each(function() {
        var o = $(this),
            swiperDestacadoSlideSimple;

        swiperDestacadoSlideSimple = createswiperDestacadoSlideSimple(o);
    });
});

function createswiperDestacadoSlideSimple(element){

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