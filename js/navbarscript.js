$('.open-sidebar').on('click', function() {
    $('.sidebar-nav').toggleClass('visible')

    if ($('.sidebar-nav').hasClass('visible')) {
        var i = 0

        $('.sidebar-nav li').addClass('animation')

        setTimeout(function() {
            $('.sidebar-nav li').each(function() {
                var $this = $(this)
                i++

                setTimeout(function() {
                    $this.removeClass('animation')
                }, i * 100)
            })
        }, 400)
    }
})

$('.sidebar-nav .btn-close').on('click', function() {
    $('.sidebar-nav').toggleClass('visible')
})