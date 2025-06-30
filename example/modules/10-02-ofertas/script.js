$(window).on('load', function() {

    $('.mdl-ofertas').each(function() {
        var o = $(this),
            swiperOferta;

        swiperOferta = createswiperOferta(o);
    });
});

function createswiperOferta(element){

    var swiper = new Swiper(element.find('.m-slide')[0], {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        freeModeSticky: false
    });

    return swiper;
}