$(window).on('load', function() {

    $('.mdl-habitaciones-destacado').each(function() {
        var o = $(this);
        var swiperHabitacionesDestacado;

        if ($(window).width() <= media_laptop) {
            swiperHabitacionesDestacado = createswiperHabitacionesDestacado(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_laptop) {

                if (swiperHabitacionesDestacado) {
                    swiperHabitacionesDestacado.destroy();
                    swiperHabitacionesDestacado = undefined;
                }

            } else {

                if (!swiperHabitacionesDestacado) {
                    swiperHabitacionesDestacado = createswiperHabitacionesDestacado(o);
                }
            }
        });

        /* Inner slide */
        $('.m-item',o).each(function(){
            var swiperHabitacionesDestacadoInner;

            swiperHabitacionesDestacadoInner = createswiperHabitacionesDestacadoInner($(this));
        });
    });
});

function createswiperHabitacionesDestacado(element){

    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: 'auto',
        spaceBetween: 24,
        pagination: {
            el: element.find('.m-pagination')[0],
        },
    });

    return swiper;
}

function createswiperHabitacionesDestacadoInner(element){

    var swiper = new Swiper(element.find('.m-item-slide-content')[0], {
        slidesPerView: 1,
        effect: "fade",
        pagination: {
            el: element.find('.m-item-pagination')[0],
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    return swiper;
}