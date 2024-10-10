$(document).ready(function () {
    if ($('[data-scrollbar]').length) {
        Scrollbar.initAll();
    }
    // scrollbar

    // upcoming match slider
    $(".sb-upcoming-match-slider").slick({
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "100px",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    // upcoming match slider
    $(".sb-game-list-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        rows: 2,
        slidesPerRow: 1, // Number of slides per row
        slidesToShow: 6, // Number of slides to show (adjust as per your need)
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
    // provider slider
    $(".sb-providers-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 9, // Number of slides to show (adjust as per your need)
        slidesToScroll: 9,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    });
    $(".sb-top-table-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        rows: 3,
        slidesPerRow: 1, // Number of slides per row
        slidesToShow: 6, // Number of slides to show (adjust as per your need)
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    $(".sb-game-list-mobile-slider").slick({
        // infinite: false,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                },
            },
        ],
    });

    $(".sb-top-table-mobile-slider").slick({
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                },
            },
        ],
    });

    $(".sb-providers-mobile-slider").slick({
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                },
            },
        ],
    });
    // mobile menu
    $(".navbar-toggler").on("click", function () {
        $(".sb-site").toggleClass("menu-open");
    });
    $(".navbar-nav .nav-link").on("click", function () {
        $(this).parent().toggleClass("submenu-open");
    });

    // language select
    $("#headerLanguage").select2({
        templateResult: headerLanguage,
        templateSelection: headerLanguage,
        dropdownCssClass: "languageContainer",
        selectionCssClass: "languageDropdown",
        minimumResultsForSearch: -1,
        placeholder: "Select country",
    });

    function headerLanguage(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/images/flags/";
        var $state = $('<span><img class="img-flag" /> <span class="country-name"></span></span>');
        $state.find(".country-name").text(state.text);
        $state.find("img").attr("src", baseUrl + state.element.value + ".png");

        return $state;
    }
});
