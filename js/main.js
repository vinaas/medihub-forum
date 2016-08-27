(function($){
    "use strict"; // Start of use strict
    $(window).load(function(){
        
    });
    
    $(document).ready(function(){
<<<<<<< HEAD
        // init_fixed_bg(60);
=======
        init_fixed_bg(60);
>>>>>>> 954d059f7553c34cdaa5408d824b1f77a8758814
        init_sticky();
    });
    
    $(window).resize(function(){
<<<<<<< HEAD
        // init_fixed_bg(60);
=======
        init_fixed_bg(60);
>>>>>>> 954d059f7553c34cdaa5408d824b1f77a8758814
    });


    $(".post__write").click(function(){
        var $this = $(this);
        if($this.hasClass("active")){
            return false;
        }else{
            $this.addClass("active");
        }
        

        var txtarea = $("#post__write--content textarea");
        txtarea.focus();

         txtarea.focusout(function(){

             if (!txtarea.val()) {
                $this.removeClass("active");
            }

            
        });

        
    });


    /*Reply comments*/
    $(".reply-comment-btn").click(function (e) {
        e.preventDefault();
        $(this).parent().children(".comment-replay").slideToggle("fast");
    });

/*End reply comments*/


})(jQuery); // End of use strict

function init_fixed_bg(headerHeight){
     if ($(window).width() > 1024) {
         var heroHeight = $(".mainSearch").outerHeight() + headerHeight; // Add header height
        $("body").addClass("fixed");
        $(".forumFixed").css("margin-top", heroHeight + "px");

         
     } else{
         $("body").removeClass("fixed");
         $(".forumFixed").css("margin-top", "0px");
     }
}

function init_sticky(){
    if ($(window).width() > 1024) {
        $("#mapView").sticky({topSpacing:80, bottomSpacing: 415});
        $(".searchFilter .searchForm").sticky({topSpacing:0});

        $(".forumHome__nav").sticky({topSpacing:0});
     } 
}




var swiperBg;

var swiperGallery;

$(function() {

    swiperBg = new Swiper('.swiper-bg-slider',{
        loop: true,
        autoplay: 8000,
        speed: 1000,
        effect: "fade",
        simulateTouch: false
    });

    swiperGallery = new Swiper('.swiper-gallery-slider', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10,
        preloadImages: false,
         nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        watchSlidesVisibility: true,
         lazyLoading: true
    });

    swiperTxt = new Swiper('.swiper-txt-slider',{
         loop: true,
        autoplay: 8000,
        speed: 1000,
        effect: "fade",
        simulateTouch: false

    })

    $(".select2Normal").select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: "vi"
    });

    $(".select2Search").select2({
        placeholder: $(this).data('placeholder'),
        allowDropup: false,
        language: "vi"
    })

    $("#range_2").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 50,
        to: 500,
        step: 50,
        postfix: " K",
        grid: false,
        hide_min_max: true,
        onChange: function (data) {
            if(data.from == 0){
                $(".irs-from").html("Miễn phí");
            }
        },
    });

    // $('.popup-gallery').each(function() { // the containers for all your galleries
    //     $(this).magnificPopup({
    //         delegate: 'a', // the selector for gallery item
    //         type: 'image',
    //         image: {
    //             verticalFit: true,
    //         },
    //         gallery: {
    //             enabled:true
    //         }
    //     });
    // });
    

    $( ".popup-gallery a" ).hover(

        function() {
            var $img = $(this).attr('href');
            var $popup = $(this).closest(".popup-gallery").next();
            $popup.css('background-image', 'url(' + $img + ')');
        }, function() {
           
        }
    );

    $('.popup-normal').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    $(".article--button").click(function(e){
        e.preventDefault();
        $(this).closest(".article--meta").next().hide();
        $(this).closest(".article--meta").next().next().slideToggle();
    });

    $('.popup-gallery').click(function(e){
        e.preventDefault();

        var index = $( ".popup-gallery" ).index( this );

         $(this).closest(".article--meta").next().next().hide();
        $(this).closest(".article--meta").next().slideToggle(function(){
            if (swiperGallery != undefined) {
                    swiperGallery[index].update();
                    swiperGallery[index].lazy.load();
                }
        });

        

    });

    $('#profile-mixitup').mixItUp({
        animation: {
		duration: '',
		effects: '',
		easing: ''
	    }
    });



<<<<<<< HEAD
=======
    

>>>>>>> 954d059f7553c34cdaa5408d824b1f77a8758814

    var swiperNews = new Swiper('.newsRun', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        speed: 2000
    });
});

