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

$(window).on('load', function () {
    $('.mdl-hotel-home').each(function () {
        var o = $(this),
            swiperHotelHome,
            swiperMenuHotelHome,
            elementTop = o.offset().top,
            elementBottom = elementTop + o.outerHeight(),
            viewportMiddle = $(window).scrollTop() + $(window).height() / 2;

        swiperHotelHome = createswiperHotelHome(o);
        swiperMenuHotelHome = createswiperMenuHotelHome(o);

        // Función para actualizar la clase v-selected en el slider de menú
        function updateMenuSelection(index) {
            swiperMenuHotelHome.slides.removeClass('v-selected');
            $(swiperMenuHotelHome.slides[index]).addClass('v-selected');
        }

        // Inicializar la clase v-selected en el elemento del slider de menú correspondiente
        updateMenuSelection(swiperHotelHome.activeIndex);

        // Sincronizar el slider de menú con el slider principal
        swiperHotelHome.on('slideChange', function () {
            var activeIndex = swiperHotelHome.activeIndex;
            swiperMenuHotelHome.slideTo(activeIndex); // Sincroniza el menú
            updateMenuSelection(activeIndex); // Actualiza la selección
            var activeSlide = $(swiperHotelHome.slides[activeIndex]);
            var itemImageSrc = $('img', activeSlide).attr('src');
            updateBackgroundImage(o, itemImageSrc);
        });

        // Cambiar el slider principal al hacer clic en el menú
        $(swiperMenuHotelHome.slides).on('click', function () {
            var index = $(this).index();
            swiperHotelHome.slideTo(index); // Cambia al slide correspondiente
            updateMenuSelection(index); // Actualiza la selección
        });

        /* Hover effect */
        $('.m-item', o).hover(
            function () {
                var itemLeft = $(this).position().left,
                    itemImageSrc = $('img', this).attr("src"),
                    itemTitle = $('footer', this).text();

                updateBackgroundImage(o, itemImageSrc);
                updateAuxiliarContent(o, itemLeft, itemImageSrc, itemTitle);

                $('.m-item.v-hovered', o).removeClass('v-hovered');
                $(this).addClass('v-hovered');
            }
        );

        /* Clear BG */
        o.hover(
            function () {
                o.addClass('v-visible');
            },
            function () {
                if (viewportMiddle > elementBottom || viewportMiddle < elementTop) {
                    o.removeClass('v-visible');
                }
            }
        );

        checkBGVisible();
        $(window).on('scroll', function () {
            elementTop = o.offset().top;
            elementBottom = elementTop + o.outerHeight();
            viewportMiddle = $(window).scrollTop() + $(window).height() / 2;
            checkBGVisible();
        });

        function checkBGVisible() {
            if (viewportMiddle >= elementTop && viewportMiddle <= elementBottom) {
                o.addClass('v-visible');
            } else if (viewportMiddle > elementBottom || viewportMiddle < elementTop) {
                o.removeClass('v-visible');
            }
        }

        $(window).on('resize', function () {
            if ($(window).width() > media_tablet) {
                if (swiperMenuHotelHome) {
                    swiperMenuHotelHome.destroy();
                    swiperMenuHotelHome = undefined;
                }
            } else {
                if (!swiperMenuHotelHome) {
                    swiperMenuHotelHome = createswiperMenuHotelHome(o);
                }
            }
        });
    });
});

function createswiperHotelHome(element) {
    var swiper = new Swiper(element.find('.m-slide-content')[0], {
        slidesPerView: 1,
        spaceBetween: 32,
        pagination: {
            el: element.find('.m-pagination')[0],
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });

    return swiper;
}

function createswiperMenuHotelHome(element) {
    var swiper = new Swiper(element.find('.m-slide-menu')[0], {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });

    return swiper;
}

function updateBackgroundImage(container, imgSrc) {
    $('.m-bg img.v-enabled', container).attr('src', imgSrc).animate(
        { opacity: 1 },
        400,
        function () {
            $('.m-bg img.v-prev', container).attr('src', imgSrc);
            $('.m-bg img.v-enabled', container).animate({ opacity: 0 }, 400);
        }
    );
}

function updateAuxiliarContent(container, leftPosition, imgSrc, title) {
    $('.m-auxiliar', container).css({ left: leftPosition });
    $('.m-auxiliar img.v-enabled', container).attr('src', imgSrc).fadeIn(
        400,
        function () {
            $('.m-auxiliar img.v-prev', container).attr('src', imgSrc);
            $('.m-auxiliar img.v-enabled', container).fadeOut(400);
        }
    );
    $('.m-auxiliar footer', container).text(title);
}

$(window).on('load', function() {

    $('.mdl-stories').each(function() {
        var o = $(this),
            swiperStories;

        swiperStories = createswiperStories(o);
    });
});

function createswiperStories(element){

    if($('.swiper-slide',element).length > 1){

        var swiper = new Swiper(element.find('.m-grid')[0], {
            slidesPerView: 'auto',
            spaceBetween: 24,
            pagination: {
                el: element.find('.m-pagination')[0],
            },
            breakpoints: {
                768: {
                    spaceBetween: 24,
                    slidesPerView: 'auto',
                },
                1024: {
                    spaceBetween: 24,
                    slidesPerView: 5,
                },
                1366: {
                    spaceBetween: 24,
                    slidesPerView: 5,
                },
            }
        });
    
        return swiper;
    }
}

$(window).on('load', function () {

    $('.mdl-modal-stories').each(function () {
        var o = $(this);
        var swiperModalStories = createswiperModalStories(o);
        
        initPagination(o, swiperModalStories);

        $('.mdl-stories [data-modal-go]').on('click',function(){
            swiperModalStories.slideTo(1);
        });
    });
});

function createswiperModalStories(element) {
    if ($('.swiper-slide', element).length > 1) {
        var swiper = new Swiper(element.find('.m-slide-content')[0], {
            slidesPerView: 1,
            loop: true,
            effect: 'fade',
            navigation: {
                prevEl: element.find('.m-left')[0],
                nextEl: element.find('.m-right')[0],
            },
        });

        swiper.on('slideChangeTransitionStart', function () {
            updatePaginationProgress(element, swiper);
        });

        element.find('.m-left, .m-right').on('click', function () {
            updatePaginationProgress(element, swiper);
        });

        return swiper;
    }
}

function initPagination(element, swiper) {
    var paginationContainer = element.find('.m-pagination');
    var slides = $(swiper.slides).filter(function () {
        return !$(this).hasClass('swiper-slide-duplicate');
    });

    paginationContainer.empty();

    slides.each(function () {
        var bar = $('<div class="m-pagination-bar"><div class="v-progress"></div></div>');
        paginationContainer.append(bar);
    });

    updatePaginationProgress(element, swiper);
}

function updatePaginationProgress(element, swiper) {
    var activeIndex = swiper.realIndex;
    var paginationBars = element.find('.m-pagination-bar .v-progress');
    var currentSlide = $(swiper.slides[swiper.activeIndex]);
    var duration = 5000;

    var video = currentSlide.find('video');
    if (video.length > 0) {
        duration = video[0].duration * 1000;
    }

    paginationBars.stop(true, true).css('width', '0%');

    var activeBar = $(paginationBars[activeIndex]);
    activeBar.animate({ width: '100%' }, duration, function () {
        swiper.slideNext();
    });
}