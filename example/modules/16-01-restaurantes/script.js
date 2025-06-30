$(window).on('load', function() {

    $('.mdl-restaurantes').each(function() {
        var o = $(this),
            swiperRestaurantes;

        swiperRestaurantes = createswiperRestaurantes(o);
    });
});

function createswiperRestaurantes(element){

    var swiper = new Swiper(element.find('.m-slide')[0], {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        freeModeSticky: false
    });

    return swiper;
}