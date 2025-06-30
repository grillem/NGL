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