$(document).ready(function () {
    slickSliders();
    formValidation();
    customPopups();
    mobileEvents();
})

function slickSliders() {
    $('.q-feedback__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        loop: true
    });
    $(".js-q-examples-slider").slick({
        dots: false,
        infinite: true,
        swipe: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\"></button>"
    });
    $(".js-q-map-gallery").slick({
        dots: false,
        infinite: false,
        swipe: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }],
        cssEase: 'linear',
        adaptiveHeight: false,
        prevArrow: false,
        nextArrow: false
    });
}

function formValidation() {
    var $form = $(".js-form-validate");

    $.each($form, function () {
        var $form = $(this);

        $form.parsley()
            .on('form:error', _focusOnFirstFieldError)
            .on('form:submit', _onFormSubmit);
    });

    function _onFormSubmit(e) {
        if(e.validationResult = false) {
            return false;
        }
    }

    function _focusOnFirstFieldError() {
        var $form = this.$element;
        var $firstInvalidField = $form.find('.parsley-error:first');
        var errors = $firstInvalidField.parsley().getErrorsMessages().join(';');
    }
}

function customPopups(){
    $(".js-show-q-call-popup").click(function (e) {
        e.preventDefault();
        $(".js-q-call-popup").show();
    });
    $(".js-show-q-map-popup").click(function (e) {
        e.preventDefault();
        $(".js-q-map-popup").show();
    });

    $(".js-close-popup").click(function (e) {
        $(".q-popup").hide();
    });

}

function mobileEvents(){
}

$('.js-open-popup').click(function () {
    $('.q-popup__bg').addClass('open'),
    $('.q-popup__close').click(function () {
        $('.q-popup__bg').removeClass('open')
    })
})


