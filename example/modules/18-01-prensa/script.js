$(window).on('load', function() {

    $('.mdl-prensa').each(function() {
        var o = $(this),
            swiperPrensa;

        swiperPrensa = createswiperPrensa(o);
    });
});

function createswiperPrensa(element){

    var swiper = new Swiper(element.find('.m-slide')[0], {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        freeModeSticky: false
    });

    return swiper;
}