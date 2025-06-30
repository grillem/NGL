$(window).on('load', function() {

    $('.mdl-rewards').each(function() {
        var o = $(this);
        var swiperRewards;

        if ($(window).width() <= media_laptop) {
            swiperRewards = createswiperRewards(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_laptop) {

                if (swiperRewards) {
                    swiperRewards.destroy();
                    swiperRewards = undefined;
                }

            } else {

                if (!swiperRewards) {
                    swiperRewards = createswiperRewards(o);
                }
            }
        });
    });
});

function createswiperRewards(element){

    var swiper = new Swiper(element.find('.m-grid')[0], {
        slidesPerView: '1',
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: element.find('.m-pagination')[0],
        },
    });

    return swiper;
}