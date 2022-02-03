$('.ask').on('click', function (e) {
    e.preventDefault();

    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500);
    $(this).toggleClass('active').next().stop().slideToggle(500);
})


$('.read-more').click(function (e) {
    e.preventDefault
    if ( $(this).html().trim() === 'Read More') {
        $(this).html('Hide')
    }else{
        $(this).html('Read More')
    }
    $('.text-hidden').toggleClass('hidden')
    
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$('h1').hover(function () { 
    $(this).css({
        position: 'absolute',
        top: getRandomInt(0, $(window).height() - $('.nav').outerHeight() - $('h1').outerHeight())+"px",
        left: getRandomInt(0, $(window).width() - $('h1').outerWidth())+"px",
        transition: 0.5 + 's'
    });
});








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