$(function() {
    $(".select2Normal").select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: "vi"
    });

    $(".select2Search").select2({
        placeholder: $(this).data('placeholder'),
        language: "vi"
    });

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

    $('.popup-gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            image: {
                verticalFit: true,
            },
            gallery: {
                enabled:true
            }
        });
    });
    

    $( ".popup-gallery a" ).hover(

        function() {
            var $img = $(this).attr('href');
            var $popup = $(this).closest(".popup-gallery").next();
            $popup.css('background-image', 'url(' + $img + ')');
        }, function() {
           
        }
    );

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    $(".article--button").click(function(e){
        e.preventDefault();
        $(this).closest(".article--meta").next().slideToggle();
    })
});


