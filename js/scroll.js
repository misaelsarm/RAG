$(function() {
    let windowHeight = $(window).height();
    $(window).scroll(function() {
        if ($(window).width() < 768) {
            let ragLogo = document.getElementById('logo');
            ragLogo.style.top = '3.5rem';
            ragLogo.style.left = '7.5rem';
            ragLogo.style.width = '100px';
        } else {
            $('.logo').css("top", Math.max(50 - 0.1 * window.scrollY, 5) +
                "%");
            $('.logo').css("left", Math.max(50 - 0.1 * window.scrollY, 7) +
                "%");

            var mass = Math.max(100, 300 - 0.5 * $(this).scrollTop()) + 'px';

            $('.logo').css({ 'width': mass });
        }
    });
});