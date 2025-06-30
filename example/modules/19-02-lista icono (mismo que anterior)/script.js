$(window).on('load', function() {

    $('.mdl-lista-logos').each(function() {
        var o = $(this);
        var swiperListaLogos;

        if ($(window).width() <= media_laptop) {
            swiperListaLogos = createswiperListaLogos(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_laptop) {

                if (swiperListaLogos) {
                    swiperListaLogos.destroy();
                    swiperListaLogos = undefined;
                }

            } else {

                if (!swiperListaLogos) {
                    swiperListaLogos = createswiperListaLogos(o);
                }
            }
        });
    });
});

function createswiperListaLogos(element){

    var swiper = new Swiper(element.find('.m-grid')[0], {
        slidesPerView: 'auto',
        spaceBetween: 50,
        pagination: {
            el: element.find('.m-pagination')[0],
            dynamicBullets: true,
        },
    });

    return swiper;
}