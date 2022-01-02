$('.open-sidebar2').on('click', function() {
    $('.sidebar-nav2').toggleClass('visible')

    if ($('.sidebar-nav2').hasClass('visible')) {
        var i = 0

        $('.sidebar-nav2 li').addClass('animation')

        setTimeout(function() {
            $('.sidebar-nav2 li').each(function() {
                var $this = $(this)
                i++

                setTimeout(function() {
                    $this.removeClass('animation')
                }, i * 100)
            })
        }, 400)
    }
})

$('.sidebar-nav2 .btn-close').on('click', function() {
    $('.sidebar-nav2').toggleClass('visible')
})