$(function () {

    $('.main_contents .right_slide').slick({
        arrows: false,
        dots: true

    });


    $('.main_contents .arrows .prev').on('click', function () {
        $('.main_contents .right_slide').slick('slickPrev')
    });
    $('.main_contents .arrows .next').on('click', function () {
        $('.main_contents .right_slide').slick('slickNext')
    });

    $('.main_solution .solution_slide').slick({

        centerMode: true,
        centerPadding: '300px',
        dots: true
    });


    $('.main_solution .solution_slide').on('afterChange', function (e, s, c) {

        $('.main_solution .slide_pop .desc')
            .eq(c)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $('.main_solution .num span').text('0' + (c + 1))
    });

    // c가 숫자0.1.2..를나타냄+를해주면 숫자가 하나씩올라감

    $('.main_solution .arrows .prev').on('click', function () {
        $('.main_solution .solution_slide').slick('slickPrev')
    });
    $('.main_solution .arrows .next').on('click', function () {
        $('.main_solution .solution_slide').slick('slickNext')
    });


})