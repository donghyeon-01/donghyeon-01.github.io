$(document).ready(function(){
    // 부드러운 스크롤
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({ scrollTop: $(hash).offset().top - 60 }, 800);
        }
    });

    // 타이핑 효과
    var i = 0;
    var txt = 'BACKEND DEVELOPER'; 
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typing-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 스크롤 애니메이션
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) { $(this).addClass("slide"); }
        });
    });
});