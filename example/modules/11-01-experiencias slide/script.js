$(window).on('load', function() {

    $('.mdl-experiencias-relacionadas').each(function() {
        var o = $(this);
        var swiperExperienciasRelacionadas;

        swiperExperienciasRelacionadas = createswiperExperienciasRelacionadas(o);
    });
});

function createswiperExperienciasRelacionadas(element){

    var swiper = new Swiper(element.find('.m-grid')[0], {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            prevEl: element.find('.m-left')[0],
            nextEl: element.find('.m-right')[0],
        },
        pagination: {
            el: element.find('.m-pagination')[0],
        },
    });

    return swiper;
}