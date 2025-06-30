$(window).on('load', function () {
    $('.mdl-stories').each(function () {
        var o = $(this),
            swiperStories;

        swiperStories = createswiperStories(o);
    });
});

function createswiperStories(element) {
    if ($('.swiper-slide', element).length > 1) {
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

        $('.mdl-stories [data-modal-go]').on('click', function () {
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

        swiper.on("slideChange", () => {
            isAnimatingBar = false;
            updatePaginationProgress(element, swiper);
        });

        element.find(".m-left, .m-right").off("click").on("click", function () {
            if (isAnimatingSlide) return;

            isAnimatingSlide = true;

            const paginationBars = element.find(".m-pagination-bar .v-progress");
            paginationBars.stop(true, true).css("width", "0%");

            if ($(this).hasClass("m-left")) {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }

            isAnimatingSlide = false;
            updatePaginationProgress(element, swiper);
        });

        element.find('.swiper-slide').on('click', function (e) {
            const slideWidth = $(this).width();
            const clickPosition = e.offsetX;

            if (clickPosition > slideWidth / 2) {
                swiper.slideNext();
            } else {
                swiper.slidePrev();
            }
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

let isAnimatingBar = false;
let isAnimatingSlide = false;

function updatePaginationProgress(element, swiper) {
    const activeIndex = swiper.realIndex;
    const paginationBars = element.find(".m-pagination-bar .v-progress");
    const currentSlide = $(swiper.slides[swiper.activeIndex]);

    if (isAnimatingBar) return;

    isAnimatingBar = true;

    let duration = 5000;

    const video = currentSlide.find("video");
    if (video.length > 0) {
        duration = video[0].duration * 1000;
    }

    paginationBars.stop(true, true).css("width", "0%");

    const activeBar = $(paginationBars[activeIndex]);

    activeBar.animate({ width: "100%" }, duration, function () {
        isAnimatingBar = false;

        if (!isAnimatingSlide) {
            isAnimatingSlide = true;
            swiper.slideNext();
        }
    });
}
