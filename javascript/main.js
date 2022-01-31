$('.ask').on('click', function (e) {
    e.preventDefault();

    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500);
    $(this).toggleClass('active').next().stop().slideToggle(500);
})


$('.read-more').click(function () {
    $(this).toggleClass('active').prev().slideToggle(500)
})


$('button[data-filter]').click(function () {
    let attr = $(this).attr('data-filter')

    if (attr === 'all') {
        $('div[data-filter]').slideDown(500)
    } else {
        $('div[data-filter]').slideUp(500)
    }
    $(`div[data-filter=${attr}]`).slideDown(500)
})


function writing(element) {
    let inner = element.html(),
        fullText = '',
        letterCount = 0,
        interval = setInterval(() => {
            fullText += inner[letterCount]
            element.html(fullText)
            letterCount++
            if (fullText === inner) {
                clearInterval(interval)
            }
        }, 150);
}
writing($('h1'))


$('.js-modal-show').click(function (e) {
    e.preventDefault()
    $('.modal').fadeIn(500)
})


$('.modal .close').click(function (e) {
    e.preventDefault()
    $('.modal').fadeOut(500)

})

$('.modal').click(function (e) {
    if (e.target === e.currentTarget) {
        $(this).fadeOut(500)
    }
})

$('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    zIndex: 10
})

$(window).on('scroll', function () {
    let edditPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()

    if (edditPosition > 0) {
        $('nav').css({
            top: edditPosition + 'px'
        })
    } else {
        $('.nav').css({
            top: 0
        })
    }
})

$('.js-sroll-to-id').click(function (e) {
    e.preventDefault()
    let attr = $(this).attr('href')
    toEl = $(attr).offset().top - $('.nav').outerHeight()
    $('html , body').animate({
        scrollTop: toEl
    },{
        duration: 1000
    })
})