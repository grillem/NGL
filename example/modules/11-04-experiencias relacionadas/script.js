$(window).on('load', function() {

    $('.mdl-experiencias-relacionadas').each(function() {
        var o = $(this);
        var swiperExperienciasRelacionadas;

        if ($(window).width() <= media_tablet) {
            swiperExperienciasRelacionadas = createswiperExperienciasRelacionadas(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_tablet) {

                if (swiperExperienciasRelacionadas) {
                    swiperExperienciasRelacionadas.destroy();
                    swiperExperienciasRelacionadas = undefined;
                }

            } else {

                if (!swiperExperienciasRelacionadas) {
                    swiperExperienciasRelacionadas = createswiperExperienciasRelacionadas(o);
                }
            }
        });
    });
});

function createswiperExperienciasRelacionadas(element){

    var swiper = new Swiper(element.find('.m-grid')[0], {
        slidesPerView: 'auto',
        spaceBetween: 24,
        pagination: {
            el: element.find('.m-pagination')[0],
        },
    });

    return swiper;
}