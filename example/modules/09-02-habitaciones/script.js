$(window).on('load', function() {

    $('.mdl-habitaciones').each(function() {
        var o = $(this),
            swiperHabitaciones;

        $('.m-content',o).each(function(){
            swiperHabitaciones = createswiperHabitaciones($(this));
        });
    });
});

function createswiperHabitaciones(element){

    if($('img',element).length > 1){
    
        var swiper = new Swiper(element.find('.m-slide-content')[0], {
            slidesPerView: 1,
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
}