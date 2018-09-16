$(function () {
    let i = 0;
    $("main .bottom .right ul li i").first().click(function () {
        i++;
        if (i > 2) {
            return;
        }
        else if (i == 2) {
            $(".one .left h5 i").html(i * 18 + 5 - 7);
            $("main .bottom .right ul li .num").html(i);
            $(".one .right").click(function () {
                window.location.href = "confirm.html";
            })
        }
        else {
            $("main .bottom .right ul li .remove").css("display", "block");
            $("main .bottom .right ul li .num").html(i);
            $("footer").css("display", "none");
            $(".one").css("display", "block");
            $(".one .left h5 i").html(i * 18 + 5);
        }
    })
    $("main .bottom .right ul li .remove").first().click(function () {
        i--;
        if (i < 1) {
            $(this).css("display", "none");
            $("main .bottom .right ul li .num").html("");
            $("footer").css("display", "block");
            $(".one").css("display", "none");
        }
        else if(i==1){
            $(".one .left h5 i").html(i * 18 + 5);
            $("main .bottom .right ul li .num").html(i);
        }
        else {
            $("main .bottom .right ul li .num").html(i);
        }
    })
})