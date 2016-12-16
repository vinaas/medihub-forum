(function ($) {
    "use strict"; // Start of use strict
    $(window).load(function () {

    });

    $(document).ready(function () {
        // init_fixed_bg(60);
        init_sticky();

        handlePerfectscroll();

        // handleDatePicker();
    });

    $(window).resize(function () {
        // init_fixed_bg(60);
    });

    $(".post__write").click(function () {
        var $this = $(this);
        if ($this.hasClass("active")) {
            return false;
        } else {
            $this.addClass("active");
        }

        var txtarea = $("#post__write--content textarea");
        txtarea.focus();

        txtarea.focusout(function () {

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

function init_fixed_bg(headerHeight) {
    if ($(window).width() > 1024) {
        var heroHeight = $(".mainSearch").outerHeight() + headerHeight; // Add header height
        $("body").addClass("fixed");
        $(".forumFixed").css("margin-top", heroHeight + "px");


    } else {
        $("body").removeClass("fixed");
        $(".forumFixed").css("margin-top", "0px");
    }
}

function init_sticky() {
    if ($(window).width() > 1024) {
        // $("#mapView").sticky({topSpacing:80, bottomSpacing: 415});
        $(".searchFilter .searchForm").sticky({
            topSpacing: 0
        });

        $(".forumHome__nav").sticky({
            topSpacing: 0
        });
    }
}




var swiperBg;

var swiperGallery;

var swiperTxt;

var swiperMoz;

var swiperNews;

$(function () {

    swiperBg = new Swiper('.swiper-bg-slider', {
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

    swiperTxt = new Swiper('.swiper-txt-slider', {
        loop: true,
        autoplay: 8000,
        speed: 1000,
        effect: "fade",
        simulateTouch: false

    });

    swiperMoz = new Swiper('.swiper-moz-slider', {
        loop: true,
        autoplay: 8000,
        speed: 1000,
        effect: "slide",

        nextButton: '.moz-button-next',
        prevButton: '.moz-button-prev',


    });

    swiperNews = new Swiper('.newsRun', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        speed: 2000
    });

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
            if (data.from == 0) {
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


    $(".popup-gallery a").hover(

        function () {
            var $img = $(this).attr('href');
            var $popup = $(this).closest(".popup-gallery").next();
            $popup.css('background-image', 'url(' + $img + ')');
        },
        function () {

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


    $(".article--button").click(function (e) {
        e.preventDefault();
        $(this).closest(".article--meta").next().hide();
        $(this).closest(".article--meta").next().next().slideToggle();
    });

    $('.popup-gallery').click(function (e) {
        e.preventDefault();

        var index = $(".popup-gallery").index(this);

        $(this).closest(".article--meta").next().next().hide();
        $(this).closest(".article--meta").next().slideToggle(function () {
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

    $('body').on('click', 'a.delete-article', function (e) {
        e.preventDefault();
        var portlet = $(this).closest(".mix");

        portlet.remove();

    });

});


$(".article--heart").on("click", function (e) {
    var $this = $(this),
        $likeIcon = $this.hasClass("is-like"),
        $loadingIcon = $this.hasClass("is-loading"),
        $num = $this.find(".num");
    $numText = $num.text();

    $this.addClass("is-loading");
    $this.prop("disabled", true);

    //Neu ajax ok
    if ($likeIcon) {
        $numText--;
        $this.removeClass("is-like");
    } else {
        $numText++;
        $this.addClass("is-like");
    }

    $num.text($numText);
    $this.prop("disabled", false);
    $this.removeClass("is-loading");
    //Neu ajax fail

    $this.prop("disabled", false);
    $this.removeClass("is-loading");


});


$(".article--bookmark").on("click", function (e) {
    var $this = $(this),

        $likeIcon = $this.hasClass("is-save"),
        $loadingIcon = $this.hasClass("is-loading");

    $this.addClass("is-loading");
    $this.prop("disabled", true);

    //Neu ajax ok
    if ($likeIcon) {
        $this.removeClass("is-save");
    } else {
        $this.addClass("is-save");
    }

    $this.prop("disabled", false);
    $this.removeClass("is-loading");
    //Neu ajax fail

    $this.prop("disabled", false);
    $this.removeClass("is-loading");
});

//Init perfect scroll

function handlePerfectscroll() {
    $('.scroll').each(function () {
        $(this).perfectScrollbar({
            suppressScrollX: true,
            wheelSpeed: 0.5
        });
    });
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var tmppath = URL.createObjectURL(event.target.files[0]);

        reader.onload = function (e) {
            $('#img-uploaded img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}



function previewImage(input) {
    var ext = $(input).val().split('.').pop().toLowerCase();
    if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
        alert('invalid extension!');
    }
    else {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $(input).parents(".single-file-preview").find("img").attr("src", e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}


$(".single-file-preview input[type=file]").change(function() {
    previewImage(this);
});


$(".file-input").change(function () {

    $(".article--thumbnail-apply").show();
    readURL(this);
});


// function handleDatePicker(){
//     $('.datepicker').pickadate({
//         monthsFull: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
//         monthsShort: ["Một", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mưới", "Mười Một", "Mười Hai"],
//         weekdaysFull: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
//         weekdaysShort: ["C.Nhật", "T.Hai", "T.Ba", "T.Tư", "T.Năm", "T.Sáu", "T.Bảy"],
//         today: "Hôm Nay",
//         clear: "Xoá",
//         firstDay: 1,
//         formatSubmit: 'yyyy/mm/dd',
//         format: 'dd/mm/yyyy'
//     })
// }
//


if (!$(".cleave-date").length == 0) {

    var cleave = new Cleave('.cleave-date', {
        date: true,
        datePattern: ['d', 'm', 'Y']
    })

}


if (!$(".cleave-number").length == 0) {

    var cleave = new Cleave('.cleave-number', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    });

}