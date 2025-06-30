$(window).on('load', function() {

    $('.mdl-nav').each(function() {
        var o = $(this);

        $('.m-nav-content [data-modal-go]',o).on('click', function(){
            $('.m-nav-content',o).toggleClass('v-submenu-enabled');
        });

        $('.m-nav-content .js-modal-close',o).on('click', function(){
            $('.m-nav-content',o).toggleClass('v-submenu-enabled');
        });
    });
});

$(window).on('load', function() {

    $('.mdl-hero-hotel').each(function() {
        var o = $(this),
            swiperHeroHotel;

        swiperHeroHotel = createswiperHeroHotel(o);

        function updateCursor(e) {
            var offset = o.offset(),
                width = o.width(),
                x = e.pageX - offset.left,
                cursorClass = '';
            
            if (jQuery(e.target).is('a')) {
                o.css('cursor', 'pointer');
                return;
            }

            if (x < width / 2) {
                cursorClass = 'css-cursor-left';
            } else {
                cursorClass = 'css-cursor-right';
            }
    
            o.removeClass('css-cursor-left css-cursor-right').addClass(cursorClass);
        }

        o.on('mousemove', updateCursor);

        o.on('click', function (e) {

            if(jQuery(window).width() > media_desktop){

                var offset = o.offset(),
                    width = o.width(),
                    x = e.pageX - offset.left;
    
                if (jQuery(e.target).is('a')) return;
    
                if (x < width / 2) {
                    swiperHeroHotel.slidePrev();
                } else {
                    swiperHeroHotel.slideNext();
                }
            }
        });

        jQuery(window).on('resize', function () {
            o.trigger('mousemove');
        });
    });
});

function createswiperHeroHotel(element){

    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: 1,
        speed: 1400,
        navigation: {
            prevEl: element.find('.m-left')[0],
            nextEl: element.find('.m-right')[0],
        },
        scrollbar: {
          el: ".m-pagination",
          hide: true,
        },
    });

    return swiper;
}

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

$(window).on('load', function () {
    $('.mdl-destacado-hotel').each(function () {
        var o = $(this),
            swiperDestacadoHotel,
            swiperDestacadoHotelGallery,
            swiperDestacadoHotelGallerySmall;

        swiperDestacadoHotel = createswiperDestacadoHotel(o);
        swiperDestacadoHotelGallery = createswiperDestacadoHotelGallery(o);
        swiperDestacadoHotelGallerySmall = createswiperDestacadoHotelGallerySmall(o);

        swiperDestacadoHotelGallery.on('slideChange', function () {
            var activeIndex = swiperDestacadoHotelGallery.activeIndex;
            swiperDestacadoHotel.slideTo(activeIndex);
            swiperDestacadoHotelGallerySmall.slideTo(activeIndex);
        });

        // Control para pausar el swiper si el contenedor no está sticky
        $(window).on('scroll', function () {
            var containerTop = o.offset().top; // Posición del contenedor
            var scrollTop = $(window).scrollTop(); // Posición del scroll
            var containerHeight = o.outerHeight();

            if (scrollTop >= containerTop && scrollTop < containerTop + containerHeight) {
                // Si el contenedor está en la posición sticky, reanudar los sliders
                swiperDestacadoHotelGallery.mousewheel.enable();
                swiperDestacadoHotelGallerySmall.mousewheel.enable();
            } else {
                // Si el contenedor no está en la posición sticky, pausar los sliders
                swiperDestacadoHotelGallery.mousewheel.disable();
                swiperDestacadoHotelGallerySmall.mousewheel.disable();
            }
        }).trigger('scroll'); // Ejecutar la comprobación inicial al cargar
    });
});

function createswiperDestacadoHotel(element) {
    return new Swiper(element.find('.m-articles')[0], {
        effect: "fade",
        slidesPerView: 1,
        speed: 1000
    });
}

function createswiperDestacadoHotelGallery(element) {
    return new Swiper(element.find('.m-slide')[0], {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        mousewheel: {
            releaseOnEdges: true,
            forceToAxis: true,
            thresholdDelta: 50,
        },
        pagination: {
            el: element.find('.m-pagination')[0],
        },
    });
}

function createswiperDestacadoHotelGallerySmall(element) {
    return new Swiper(element.find('.m-slide-small')[0], {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000
    });
}

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