$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /*Появление шапки при скролле*/
    checkScroll(scrollOffset);
    $(window).on("scroll", function () {
        /*скролл*/

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Плавный переход к элементам*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            $this = $(this),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active"); /*у ссылки убираем класс актив*/
        $this.addClass("active"); /*добавляем класс актив для нажатой ссылки*/
        $("nav").removeClass("active"); /*закрываем меню при нажатии*/


        $("#nav_toggle").toggleClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /*появление меню*/
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault(); /*убрать стандортное событие кнопки*/

        $(this).toggleClass("active");
        $("nav").toggleClass("active");


    });

    /*аркадион*/
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault(); /*убрать стандортное событие кнопки*/

        var blockId = $(this).data('collapse'),
            /*нажали на датаколапс, 
               получили его значение (блок id) и данный блок 
               раскрыв/закрыв методом слайдтогл*/
            $this = $(this);
        $this.toggleClass("active");

    });



    /*data-slider*/


    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });

});