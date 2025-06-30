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
