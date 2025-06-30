$(window).on('load', function() {

    $('.mdl-hero').each(function() {
        var o = $(this);
        var swiperHero;

        if ($(window).width() <= media_desktop) {
            swiperHero = createswiperHero(o);
        }

        $(window).on('resize', function() {

            if ($(window).width() > media_desktop) {

                if (swiperHero) {
                    swiperHero.destroy();
                    swiperHero = undefined;
                }

            } else {

                if (!swiperHero) {
                    swiperHero = createswiperHero(o);
                }
            }
        });

        //Hover effect
        $('.m-item',o).hover(
            function(){
                $('.m-item.v-enabled',o).removeClass('v-enabled');
                $(this).addClass('v-enabled');
            }
        );
    });
});

function createswiperHero(element){

    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: '1',
        loop: true,
    });

    return swiper;
}