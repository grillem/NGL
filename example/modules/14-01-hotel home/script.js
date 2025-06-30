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

        function updateMenuSelection(index) {
            swiperMenuHotelHome.slides.removeClass('v-selected');
            $(swiperMenuHotelHome.slides[index]).addClass('v-selected');
        }

        updateMenuSelection(swiperHotelHome.activeIndex);

        swiperHotelHome.on('slideChange', function () {
            var activeIndex = swiperHotelHome.activeIndex;
            swiperMenuHotelHome.slideTo(activeIndex);
            updateMenuSelection(activeIndex);
            var activeSlide = $(swiperHotelHome.slides[activeIndex]);
            var itemImageSrc = $('img', activeSlide).attr('src');

            $('.m-bg img',o).removeClass('v-selected');
            $('.m-bg img',o).eq(activeIndex).addClass('v-selected');
        });

        $(swiperMenuHotelHome.slides).on('click', function () {
            var index = $(this).index();
            swiperHotelHome.slideTo(index);
            updateMenuSelection(index);
        });

        $('.m-item', o).hover(
            function () {
                var itemLeft = $(this).position().left,
                    itemImageSrc = $('img', this).attr("src"),
                    itemTitle = $('footer', this).text();

                $('.m-bg img',o).removeClass('v-selected');
                $('.m-bg img',o).eq($(this).index()).addClass('v-selected');

                updateAuxiliarContent(o, itemLeft, itemImageSrc, itemTitle);

                $('.m-item.v-hovered', o).removeClass('v-hovered');
                $(this).addClass('v-hovered');
            }
        );

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

/* function updateBackgroundImage(container, imgSrc) {
    $('.m-bg img.v-enabled', container).attr('src', imgSrc).animate(
        { opacity: 1 },
        400,
        function () {
            $('.m-bg img.v-prev', container).attr('src', imgSrc);
            $('.m-bg img.v-enabled', container).animate({ opacity: 0 }, 400);
        }
    );
} */

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
