$('document').ready(function () {

    $("#menu a").click(function(e) {

        e.preventDefault();

        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
        
    });

    $("#menu a").click(function () {closeMenu()});

    $(".card-body").not($(".card-body").first()).slideUp();

    $('#menu-btn').click(function () {
        
        'use strict';

        $("#menu-btn").css("left", "250px");

        $("#menu").css("width", "250px");

    });

    $("#exit-btn").click(function () {closeMenu()});

    $(".card-header").click(function () {

        'use strict';

        $(".card-body").not($(this).next()).slideUp();

        $(this).next().slideToggle();

    });

    const eventDate = new Date("Jan 1, 2025 00:00:00").getTime();

    var test = setInterval(function() {

        'use strict';

        let nowTime = new Date().getTime(),

            comingTime = eventDate - nowTime,

            d = Math.floor(comingTime / (1000 * 60 * 60 * 24)),

            h = Math.floor((comingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),

            m = Math.floor((comingTime % (1000 * 60 * 60)) / (1000 * 60)),

            s = Math.floor((comingTime % (1000 * 60)) / 1000);


        $("#days").text("D :" + d);

        $("#hours").text("H :" + h);

        $("#minutes").text("M :" + m);
        
        $("#sec").text("S :" + s);

    }, 1000); 

    $(function () {

        'use strict';

        const maxChar = 100;

        $("#char-num").text(maxChar);

        $("#feed-back").keydown(function (event) {

            testChar($(this));

        });

        $("#feed-back").keyup(function (event) {

            testChar($(this));

        });

        function testChar(feedBack) {

            'use strict';
        
            let currentChar = feedBack.val().length;
        
            if(currentChar > maxChar) {
        
                feedBack.val(feedBack.val().substring(0, maxChar));
        
            } else {
        
                let remChar = maxChar - currentChar;
        
                $("#char-num").text(remChar);
                
            }
        }
    });
});


function closeMenu() {

    'use strict';

    $("#menu-btn").css("left", "0px");

    $("#menu").css("width", "0px");

}