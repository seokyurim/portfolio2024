// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function () {


            // 시작변수지정하기
            var a =0;

            setInterval(function(){
                a++;
                if(a>9)a=0
                

                 // 박스1을 왼쪽으로 이동해라. 

            $('.imgBox1 li').eq(a-1).css({'left':0}).stop().animate({'left':'-100%'},1200);
            $('.imgBox1 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},1200);
        



            },2000)
    // 0부터2까지의 숫자를 무한반복해라.

    // 시작변수지정하기
    // var a = 9;

    // // 박스1을 왼쪽으로 이동해라. 
    // setInterval(function () {
    //     $('.imgBox1 img').eq(a).css({ 'left': 0 }).stop().animate({ 'left': '-100%' }, 1200);
    //     if(a == 0 )
    //     {a = 9;
    //         $('.imgBox1 img').css({ 'left': 0 })
    //     }
    //     a--;
    // }, 2000)




    // $('.imgBox1 img').on("click", function(){
    //         var index = $(this).index();
    //         if(index == 0){
    //             $('.imgBox1 img').eq(0).hide();
    //         }
    //     })


    // var b = 0
    // 숫자를 0부터 2까지 무한반복
    // setInterval(function () {
    //     b++;
    //     if (b == 9) b = 0;
    //     $('.imgBox1 img').eq(b - 1).css({ 'left': '0' }).stop().animate({ 'left': '100%' })
    //     $('.imgBox1 img').eq(b).css({ 'left': '-100%' }).stop().animate({ 'left': '0' })
    // }, 2000)




    //컨펌 이벤트 처리
    $("#confirm").click(function () {
        modalClose();
    });

    $(".banner_map").click(function () {
        $("#popup").css('display', 'flex').hide().fadeIn();
    });

    $("#close").click(function () {
        modalClose();
    });

    function modalClose() {
        $("#popup").fadeOut();
    }
})