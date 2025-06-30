$(window).on('load', function() {

    $('.mdl-galeria').each(function() {
        var o = $(this),
            swiperGaleria;

        swiperGaleria = createswiperGaleria(o);
    
        $('.mdl-modal-galeria').each(function() {
            var e = $(this),
                swiperGaleriaModal;
    
            swiperGaleriaModal = createswiperGaleriaModal(e);
    
            $('.m-item.v-selected',o).on('click', function(){
                var i = $('.m-item.v-selected',o).index(this);

                console.log(i);
                swiperGaleriaModal.slideTo(i);
            });
        });

        $('.m-grid',o).masonry();
        
        $('.s-tabclick',o).on('click', function(){
            $('.m-grid',o).masonry();
    
            swiperGaleriaModal.update();
        });
    });

});

function createswiperGaleria(element){

    var swiper = new Swiper(element.find('.m-slide')[0], {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        freeModeSticky: false,
        navigation: {
            prevEl: element.find('.m-left')[0],
            nextEl: element.find('.m-right')[0],
        },
    });

    return swiper;
}

function createswiperGaleriaModal(element){

    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: 1,
        navigation: {
            prevEl: element.find('.m-left')[0],
            nextEl: element.find('.m-right')[0],
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    });

    return swiper;
}