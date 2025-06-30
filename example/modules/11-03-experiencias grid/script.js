$(window).on('load', function() {

    $('.mdl-experiencias-grid').each(function() {
        var o = $(this);
        var swiperExperienciasGrid;

        if ($(window).width() <= media_tablet) {
            swiperExperienciasGrid = createswiperExperienciasGrid(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_tablet) {

                if (swiperExperienciasGrid) {
                    swiperExperienciasGrid.destroy();
                    swiperExperienciasGrid = undefined;
                }

            } else {

                if (!swiperExperienciasGrid) {
                    swiperExperienciasGrid = createswiperExperienciasGrid(o);
                }
            }
        });
    });
});

function createswiperExperienciasGrid(element){

    var swiper = new Swiper(element.find('.m-grid')[0], {
        slidesPerView: 'auto',
        spaceBetween: 24,
        pagination: {
            el: element.find('.m-pagination')[0],
            dynamicBullets: true,
        },
    });

    return swiper;
}