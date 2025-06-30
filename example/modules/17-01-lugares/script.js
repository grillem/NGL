$(window).on('load', function() {

    $('.mdl-lugares').each(function() {
        var o = $(this),
            swiperLugares;

        swiperLugares = createswiperLugares(o);
    });
});

function createswiperLugares(element){

    var swiper = new Swiper(element.find('.m-slide')[0], {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        freeModeSticky: false
    });

    return swiper;
}