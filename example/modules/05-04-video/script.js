$(window).on('load', function() {

    $('.mdl-video').each(function() {
        var o = $(this),
            video = $('video',o)[0],
            icon = $('.m-icon',o),
            sound = $('.m-sound',o);


        icon.on('click', function () {
            if (video.muted) {
                video.muted = false;
                video.currentTime = 0;
            } else {
                video.muted = true;
            }

            $('.m-sound',o).toggleClass('v-muted');
        });
    });
});