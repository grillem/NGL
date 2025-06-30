$(window).on('load', function () {
    $('.mdl-bless-concept-banner-modal').each(function () {
        var o = $(this),
            swiperConceptModal,
            swiperConceptModalDark;

        swiperConceptModal = createswiperConceptModal($('.m-slide.v-light', o));
        swiperConceptModalDark = createswiperConceptModalDark($('.m-slide.v-dark', o));

        swiperConceptModalDark.on('slideChange', function () {
            var activeIndex = swiperConceptModalDark.activeIndex;
            swiperConceptModal.slideTo(activeIndex);
        });

        $('.m-switch-trigger', o).on('click', function () {
            o.toggleClass('v-dark');
        });
    });
});

function createswiperConceptModal(element) {
    var swiper = new Swiper(element[0], {
        effect: 'fade',
        slidesPerView: 1,
        speed: 1000,
    });

    return swiper;
}

function createswiperConceptModalDark(element) {
    var autoplayDelay = 8000;
    var autoplayTimeout = null;
    var isUserInteracted = false;
    var isAutoplaying = false;

    var swiper = new Swiper(element[0], {
        effect: 'fade',
        slidesPerView: 1,
        speed: 1000,
        mousewheel: true,
        pagination: {
            el: element.parent().find('.m-pagination')[0],
            clickable: true,
            renderBullet: function (index, className) {
                return `
                    <span class="${className}">
                        <span class="progress-bar"></span>
                    </span>`;
            },
        },
        on: {
            init: function () {
                startAutoplay(); // Inicia autoplay al cargar
            },
            slideChangeTransitionStart: function () {
                updatePagination();
                if (!isAutoplaying) {
                    stopAutoplayOnInteraction();
                }
            },
            touchStart: function () {
                stopAutoplayOnInteraction();
            },
            click: function () {
                stopAutoplayOnInteraction();
            },
        },
    });

    element.on('wheel', function () {
        stopAutoplayOnInteraction();
    });
    
    $('.mdl-bless-concept-banner .m-button').on('click', function () {
        swiper.slideTo(0);
        resetAutoplay();
    });

    function startAutoplay() {
        if (isUserInteracted) return;
        isAutoplaying = true;
        autoplayTimeout = setTimeout(() => {
            swiper.slideNext();
            startAutoplay();
        }, autoplayDelay);
    }

    function stopAutoplayOnInteraction() {
        if (!isUserInteracted) {
            console.log("Deteniendo autoplay por interacción (incluye rueda del ratón)");
            isUserInteracted = true;
            isAutoplaying = false;
            clearTimeout(autoplayTimeout);
        }
    }

    function updatePagination() {
        var bullets = element.parent().find('.swiper-pagination-bullet .progress-bar');
        var currentIndex = swiper.activeIndex;

        bullets.each(function (index) {
            if (index < currentIndex) {
                $(this).css({
                    transition: 'none',
                    width: '100%',
                });
            } else if (index === currentIndex) {
                $(this).css({
                    transition: `width ${autoplayDelay}ms linear`,
                    width: '100%',
                });
            } else {
                $(this).css({
                    transition: 'none',
                    width: '0',
                });
            }
        });
    }

    return swiper;
}
