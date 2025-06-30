var media_desktop   = 1365,
    media_laptop    = 1023,
    media_tablet    = 767,
    media_mobile    = 320;

$(window).on('load',function(){
    
    if($(window).width() <= media_desktop){
        
        if($(window).width() < media_laptop){
            
            if($(window).width() < media_tablet){
                
                if(!$('html').hasClass('mobile')){
                    $('html').removeClass('desktop').removeClass('laptop').removeClass('tablet');
                    $('html').addClass('mobile');
                }
            }
            else{
                
                if(!$('html').hasClass('tablet')){
                    $('html').removeClass('desktop').removeClass('laptop').removeClass('mobile');
                    $('html').addClass('tablet');
                }
            }
            
        }
        else{
            
            if(!$('html').hasClass('laptop')){
                $('html').removeClass('desktop').removeClass('tablet').removeClass('mobile');
                $('html').addClass('laptop');
            }
        }
    }
    else{
        
        if(!$('html').hasClass('desktop')){
            $('html').removeClass('laptop').removeClass('tablet').removeClass('mobile');
            $('html').addClass('desktop');
        }
    }
    
    $('.mfp-hide').attr('style','display: block!important');
    $('.mfp-hide').removeAttr('style');
});

$(window).resize(function(){
    
    if($(window).width() <= media_desktop){
        
        if($(window).width() < media_laptop){
            
            if($(window).width() < media_tablet){
                
                if(!$('html').hasClass('mobile')){
                    $('html').removeClass('desktop').removeClass('laptop').removeClass('tablet');
                    $('html').addClass('mobile');
                }
            }
            else{
                
                if(!$('html').hasClass('tablet')){
                    $('html').removeClass('desktop').removeClass('laptop').removeClass('mobile');
                    $('html').addClass('tablet');
                }
            }
            
        }
        else{
            
            if(!$('html').hasClass('laptop')){
                $('html').removeClass('desktop').removeClass('tablet').removeClass('mobile');
                $('html').addClass('laptop');
            }
        }
    }
    else{
        
        if(!$('html').hasClass('desktop')){
            $('html').removeClass('laptop').removeClass('tablet').removeClass('mobile');
            $('html').addClass('desktop');
        }
    }
});

// GLOBAL


/*** Efectos de carga y scroll ***/
$(window).on('load', function(){
    
    $('.eff-init_trans').each(function(){
        $(this).removeClass('eff-init_trans');
    });
    
    $('.eff-noactive').each(function(){
        var o = $(this);
        
        if($(window).scrollTop() > (o.offset().top - $(window).outerHeight(true) * 1.2)){
            o.addClass('eff-active');
            
            setTimeout(function(){
                o.removeClass('eff-noactive');
                o.removeClass('eff-active');
            },1000);
        }
    });
    
    $('.eff-noactiveimg').each(function(){
        var o = $(this);
        
        if($(window).scrollTop() > (o.offset().top - $(window).outerHeight(true))){
            o.addClass('eff-activeimg');
            
            setTimeout(function(){
                o.removeClass('eff-noactiveimg');
            },1000);
        }
    });
    
    $('.eff-noactivehero').each(function(){
        var o = $(this);
        
        if($(window).scrollTop() > (o.offset().top - $(window).outerHeight(true))){
            o.addClass('eff-activehero');
            
            setTimeout(function(){
                o.removeClass('eff-noactivehero');
                o.removeClass('eff-activehero');
            },2000);
        }
    });

    //[Selector personalizado form]
    if($('.sta-g-select').length)
        $('.sta-g-select').each(function(){
            var o = $(this);
            $('.sta-g_s_view', o).text($('select option:selected', o).text());
            
            $('select', o).change(function(){
                $('.sta-g_s_view', o).text($('select option:selected', o).text());
                if(!$('.sta-g_s_view', o).hasClass('active')){
                    o.addClass('active');
                }
            });
        });

    /* Countdown */
    if($('.sta-countdown').length){
        $('.sta-countdown').countdown($('.sta-countdown input').val(), function(event) {
            $('.sta-day span',this).text(event.strftime('%D'));
            $('.sta-hour span',this).text(event.strftime('%H'));
            $('.sta-min span',this).text(event.strftime('%M'));
            $('.sta-sec span',this).text(event.strftime('%S'));
        });
    }
})
.scroll(function(){
    
    $('.eff-noactive').each(function(){
        var o = $(this);
        
        if($(window).scrollTop() > (o.offset().top - $(window).outerHeight(true))){
            o.addClass('eff-active');
            
            setTimeout(function(){
                o.removeClass('eff-noactive');
                o.removeClass('eff-active');
            },1000);
        }
    });
    
    $('.eff-noactiveimg').each(function(){
        var o = $(this);
        
        if($(window).scrollTop() > (o.offset().top - $(window).outerHeight(true))){
            o.addClass('eff-activeimg');
            
            setTimeout(function(){
                o.removeClass('eff-noactiveimg');
            },1000);
        }
    });
    
    $('.eff-noactivehero').each(function(){
        var o = $(this);
        
        if($(window).scrollTop() > (o.offset().top - $(window).outerHeight(true))){
            o.addClass('eff-activehero');
            
            setTimeout(function(){
                o.removeClass('eff-noactivehero');
                o.removeClass('eff-activehero');
            },2000);
        }
    });
});


/*** SEE MORE ***/
$(window).on('load', function(){

    if($('.sta-see_more').length)
        setViewMore();
});

function seeMore(lines){
    jQuery('.sta-see_more').each(function(){
        var o = jQuery(this),
            h = jQuery('[s_see_more-data]',o).attr('s_see_more-data').split(','),
            get_height = 0,
            userLines = 0;

        var altura = jQuery('.s_see_more-content',o).data('altura');
        
        
        function seeMore_getHeight(){

            if(jQuery(window).width() > 1024){
                userLines = h[0];
                get_height = h[0] * altura;
            }
            else{
                if(jQuery(window).width() <= 1024){
                    get_height = h[1] * altura;
                    userLines = h[1];

                    if(jQuery(window).width() <= 768){
                        get_height = h[2] * altura;
                        userLines = h[2];

                        if(jQuery(window).width() < 768){
                            get_height = h[3] * altura;
                            userLines = h[3];
                        }
                    }
                }
            }
        }
        
        seeMore_getHeight();
        
        if ((get_height != '') && (lines > userLines)) {
            if(jQuery('.s_see_more-content',o).is(':visible') && jQuery('.s_see_more-content',o).height() > get_height){

                jQuery('.s_see_more-content',o).attr('s_see_more-height', (jQuery('.s_see_more-content',o).height()));

                jQuery('.s_see_more-content',o).css('height', get_height + 'px');
                jQuery('.s_see_more-trigger',o).unbind('click').click(function(){

                    jQuery('.s_see_more-trigger',o).hasClass('open') ?
                        SM_closeSlider():
                        SM_openSlider();
                });

                jQuery('.s_see_more-trigger',o).show().css({opacity: '1', cursor: 'pointer'});
            }
            
            if(jQuery('.s_see_more-content',o).data('notequal') != 'S' && jQuery('.s_see_more-content',o).is(':visible') && jQuery('.s_see_more-content',o).height() <= get_height){


                jQuery('.s_see_more-content',o).css('height', get_height + 'px');
                
            }
        } else {
            jQuery('.s_see_more-trigger',o).hide();
        }

        function SM_openSlider(){
            var open_height = jQuery('.s_see_more-content',o).attr('s_see_more-height') + 'px';

            jQuery('.s_see_more-content',o).animate({'height': open_height}, {duration: 'fast' });
            jQuery('.s_see_more-trigger',o).addClass('open');
        }

        function SM_closeSlider(){
            jQuery('.s_see_more-content',o).animate({'height': get_height + 'px'}, {duration: 'fast' });
            jQuery('.s_see_more-trigger',o).removeClass('open');
        }
    });
}

function setViewMore(){
    $('*[s_see_more-data]').each(function() {
        var altura = $(this).height();
		var s = $(this).html();
		$(this).html('A');
		var lineHeight = $(this).height();
		$(this).html(s);
		var lines = altura / lineHeight;
		$(this).attr('data-lines', lines);
        $(this).attr('data-altura', altura / lines);
        $(this).siblings().html('<a class="s_see_more-trigger m-more" href="javascript:"><span>Leer más</span><span>Leer menos</span></a>');        
        $(this).addClass('s_see_more-content');
        var html = $(this).parent().html();
        $(this).parent().html('<div class="sta-see_more">'+html+'</div>');
        
        seeMore(lines);
    });
}

/*** tabs ***/
$(function(){
    
    if($('.js-tabclick').length){

        $('.s-tabclick').each(function(){
            var o = $(this),
                go = o.data('tabsGo'),
                id = o.parent().data('tabsId');
                
            o.click(function(){

                if(o.hasClass('v-selected')){

                    $('[data-tabs-id="'+ id +'"] > [data-tabs]').addClass('v-selected');
                    $('[data-tabs-id="'+ id +'"] > [data-tabs-go]').addClass('v-initial');
                    $('[data-tabs-id="'+ id +'"] > [data-tabs-go]').removeClass('v-selected');
                }
                else{

                    $('[data-tabs-id="'+ id +'"] > [data-tabs-go]').removeClass('v-initial');
                    $('[data-tabs-id="'+ id +'"] > [data-tabs-go]').removeClass('v-selected');
                    o.addClass('v-selected');
    
                    $('[data-tabs-id="'+ id +'"] > [data-tabs]').removeClass('v-selected');
        
                    if(go=="0"){
                        $('[data-tabs-id="'+ id +'"] > [data-tabs]').addClass('v-selected');
                    }
                    else{
                        $('[data-tabs-id="'+ id +'"] > [data-tabs*="'+ go +'"]').addClass('v-selected');
                    }
                }
            });
        });

        $('.s-tabclickselect').each(function(){
            var o = $(this),
                id = o.data('tabsId');
            
            o.change(function(){
                var go = $('option:selected', o).data('tabsGo');

                $('[data-tabs-id="'+ id +'"] > [data-tabs-go]').removeClass('v-selected');
                $('[data-tabs-id="'+ id +'"] > [data-tabs-go=' + go + ']').addClass('v-selected');

                $('[data-tabs-id="'+ id +'"] > [data-tabs]').removeClass('v-selected');
                $('[data-tabs-id="'+ id +'"] > [data-tabs="'+ go +'"]').addClass('v-selected');
            });
        });
    }
});

/***Accordion***/
$(function(){
    if($('.js-accordion').length)defaultAccordion();
});

function defaultAccordion(){
    
    $('.js-accordion').each(function(){
        var o = $(this),
            parent = o.parent()
            unique = o.closest('.js-accordion-unique').length;
            
        $('.js-header',o).first().click(function(){
            
            if(!o.hasClass('v-open')){

                if(unique){
                    var uniqueItem = o.closest('.js-accordion-unique');

                    $('.js-accordion.v-open .js-section',uniqueItem).slideUp();
                    $('.js-accordion.v-open',uniqueItem).removeClass('v-open');
                }

                $('.js-accordion.v-open .js-section',parent).slideUp();
                $('.js-accordion.v-open',parent).removeClass('v-open');
                parent.addClass('v-enabled');
            }
            else{
                parent.removeClass('v-enabled');
            }

            $('.js-section',o).first().slideToggle();
            o.toggleClass('v-open');
            
        });
    });
}


/*Overflow hidden page on click*/
$(window).on('load', function(){
    
    if($('[data-modal-go], .js-modal-close').length)
        $('[data-modal-go], .js-modal-close').not('.js-modal-close.v-inside, [data-modal-go].v-inside').click(function(){            
            $('html').toggleClass('over-hidden');
            
            if($('html').hasClass('over-hidden')){
                scroll_o = $(window).scrollTop();
            }
            else{
                $('body').css({'position': 'static'});
                $(window).scrollTop(scroll_o);
            }
        });
});

//Input
$(document).on('keypress change', 'input, textarea', function() {
   if($(this).val().length != 0) {
      $(this).parent().addClass('v-active');
   }
});

//Target
$(document).ready(function(){
    
    //[Anclas con animación - Global]
    $('a[href*="#"]:not([href="#"])').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 90)
                }, 1000);

                return false;
            }
        }
    });
});

/*** Dropdown ***/
$(function() {
  
    $('.sta-dropdown').each(function(){
        var o = $(this);

        $('> .s-drop-header',o).on('click', function() {
            $(this).parent().toggleClass('v-open');
        });
        
        $('> .s-dropdown-list .s-dropdown-option',o).on('click', function() {
            $('> .s-dropdown-list .s-dropdown-option',o).removeClass('selected');
            $(this).toggleClass('v-selected');
            if($('.s-dropdown-option.v-selected',o).length){
                o.addClass('selected');
            }
            else{
                o.removeClass('selected');
            }
        });

        $('> .s-dropdown-list .s-dropdown-option-select',o).on('click', function() {
            $('.m-select-select span',o).text($('span',this).text());
            o.removeClass('v-open');
        });
        
        $(document).on('keyup', function(evt) {
            if ( (evt.keyCode || evt.which) === 27 ) {
                o.removeClass('v-open');
            }
        });
        
        $(document).on('click', function(evt) {
            if ( $(evt.target).closest(o).length === 0 ) {
                o.removeClass('v-open');
            }
        });

        $('.m-bg',o).on('click', function(evt) {
            o.removeClass('v-open');
        });
    });
    
});


/*** Hide modal & Show modal ***/
$(function(){

    if($('[data-modal-go]').length){

        $('[data-modal-go]').each(function(){
            var o = $(this),
                go = o.data('modalGo');

            o.on('click', function(){
                $('[data-modal="' + go + '"]').toggleClass('v-selected');
            });
        });

        $('[data-modal]').each(function(){
            var o = $(this);

            $('.js-modal-close').on('click', function(){
                $(this).closest('[data-modal]').removeClass('v-selected');
            });
        });
    }
});

/*** Touch screen ***/
$(document).ready(function(){
    var isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints);
    if (isTouchDevice) {
        $('body').addClass('v-touch');
    }
});

$(window).resize(function(){
    var isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints);
    if (isTouchDevice) {
        $('body').addClass('v-touch');
    }
    else{
        $('body').removeClass('v-touch');
    }
});

/*** Custom scrollbar ***/
jQuery(window).on('load',function(){
    var allowBodyScroll = true;

    if(jQuery('.js-custom-scrollbar').length && (!jQuery('html.mobile').length || !jQuery('html.tablet').length || !jQuery('body.v-touch').length)){
        jQuery('.js-custom-scrollbar').each(function(){
            var o = jQuery(this);
            
            o.mCustomScrollbar({
                callbacks:{
                    whileScrolling:function(){
                        if(this.mcs.topPct >= 0){
                            allowBodyScroll = false;
                            setTimeout(function(){
                                allowBodyScroll = true;
                            }, 500);
                        }
                        if(this.mcs.topPct >= 100){
                            o.parent().addClass('v-scroll-end');
                            allowBodyScroll = false;
                            setTimeout(function(){
                                allowBodyScroll = true;
                            }, 500);
                        }
                        else{
                            o.parent().removeClass('v-scroll-end');
                        }
                    }
                }
            });

            document.addEventListener('wheel', function(event) {
                if (!allowBodyScroll) {
                    event.preventDefault();
                }
            }, { passive: false });
        });
    }
});

//[Scroll Menu]
$(window).on('load',function(){

    if($('[class^="mdl-header"]').length && $('.sta-triggerform').length)
        if($(window).scrollTop() > $('.sta-triggerform').offset().top){
            $('[class^="mdl-header"]').addClass('v-scroller');
        }
        else{
            $('[class^="mdl-header"]').removeClass('v-scroller');
        }

}).on('scroll', function(){

    if($('[class^="mdl-header"]').length && $('.sta-triggerform').length)
        if($(window).scrollTop() > $('.sta-triggerform').offset().top){
            $('[class^="mdl-header"]').addClass('v-scroller');
        }
        else{
            $('[class^="mdl-header"]').removeClass('v-scroller');
        }
});

//Sticky menus
$(document).ready(function(){

    var previousScroll = 0;
  
    $(window).scroll(function(){
  
        var currentScroll = $(this).scrollTop();
        if (currentScroll >= 0 && currentScroll < $(document).height() - $(window).height()){
          
            if (currentScroll > previousScroll){
                scrollDown();
            } else {
                scrollUp();
            }
                
            previousScroll = currentScroll;
        }
    });
  
    function scrollDown() {
        $(".mdl-header").removeClass("v-scroller-up");
        $(".mdl-header").addClass("v-scroller-down");
    }
    function scrollUp() {
        $(".mdl-header").addClass("v-scroller-up");
        $(".mdl-header").removeClass("v-scroller-down");
    }
  
});

/*** simulated click ***/
$(function(){
    
    if($('[data-simulated-click-go]').length)
        $('[data-simulated-click-go]').each(function(){
            var o = $(this);

            o.on('click', function(){
                var go = o.data('simulatedClickGo');

                $('[data-simulated-click="'+ go +'"]').click();
            });
        });
});

//[Input file personalizado]
$(window).on('load', function(){

    if($('.sta-g-inputfile').length){
        $('.sta-g-inputfile').each(function(){
            var o = $(this);
    
            $('input',o).on('change', function() {
                var fileName = $(this).val().split('\\').pop();
                $('.sta-g-inputfile-name',o).text(fileName);
            });
        });
    }
});

/* Masonry */
$(window).on('load',function(){
    
    if($('.sta-masonry').length)
        $('.sta-masonry').each(function(){
            $(this).masonry();
        });
});

/* Move footer */
$(document).ready(function() {
    // Selecciona el elemento con clase 'mdl-footer' y lo mueve fuera de 'main'
    $('.mdl-footer').appendTo('body');
});

/* Body footer padding */
$(document).ready(function () {
    function updateFooterBehavior() {
        const footerHeight = $('.mdl-footer').outerHeight();
        const windowHeight = $(window).height();

        $('main').css('margin-bottom', footerHeight + 'px');

        if (footerHeight > windowHeight) {
            $('body').addClass('v-static-footer');
        } else {
            $('body').removeClass('v-static-footer');
        }
    }

    updateFooterBehavior();

    $(window).on('resize', updateFooterBehavior);

    let resizeObserver = new ResizeObserver(() => {
        updateFooterBehavior();
    });

    resizeObserver.observe(document.querySelector('.mdl-footer'));
});
