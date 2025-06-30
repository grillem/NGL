$(window).on('load', function() {

    $('.mdl-hero-scroll').each(function() {
        var o = $(this);

        function checkScrollCondition() {
            var stickyContentHeight = $('.m-sticky-content',o).outerHeight(),
                bgHeight = $('.m-bg',o).outerHeight(),
                viewportHeight = $(window).height();
            
            if ((stickyContentHeight + bgHeight) > viewportHeight) {
                o.addClass('v-scrolldown');
            } else {
                o.removeClass('v-scrolldown');
            }
        }

        checkScrollCondition();

        $(window).on('resize', function () {
            checkScrollCondition();
        });
    });
});