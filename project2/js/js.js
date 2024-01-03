// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){


            // 시작변수지정하기
            var a =0;

            setInterval(function(){
                a++;
                if(a>9)a=0
                

                 // 박스1을 왼쪽으로 이동해라. 

            $('.imgBox1 li').eq(a-1).css({'left':0}).stop().animate({'left':'-100%'},1200);
            $('.imgBox1 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},1200);
        



            },2000);

        // fa-shopping-basket을 클릭 했을 때, util 안에 있는 span의 숫자가 올라가라.
        let i = 0;
        $('.fa-shopping-basket').click(function(e){
                e.preventDefault()
                i++;
                console.log(i)
        $('.util').find('span').text(i)
            

        let txt = $(this).parents('div').siblings('.pro').html();
            // alert(txt)

        $('.popUp').find('span').text(i)
        $('.popUp').find('h4').find('span').text(i)
        let tag = txt
        $('.popUp section').find('div').append(tag)
            });

                // util의  첫번째 li를 클릭했을 때, shop이 보여라
        $('.util li').eq(0).click(function(e){
            e.preventDefault()
        $('.popUp').css({'display':'block'})

        });

        // reset를 클릭햇을 때, shop이 사라져라
        $('.reset').click(function(e){
            e.preventDefault()
        $('.popUp').css({'display':'none'})
    });


    // 하트 클릭 
    let dd = 0;

    $('.fa-heart').click(function() {
        dd++;
        if (dd % 2 === 1) {
            // 홀수번 클릭일 때
            $(this).addClass('on');
            
        } else {
            // 짝수번 클릭일 때
            $(this).removeClass('on');
        }
    });
    // 스크롤 고정
    $('.util li').eq(0).click(function(e){
        e.preventDefault()
    $('.fixed').addClass('on')
    $('body').addClass('fix')
    });
    $('.reset').click(function(){
        $('.fixed').removeClass('on')
        $('body').removeClass('fix')
    });

    $('.num').click(function(){

        alert('마지막 페이지입니다.')
    });

    $('.empty').click(function(){
        i=0;
        $('.popUp').find('span').text(i)
        $('.util').find('span').text(i)
        $('.popUp section').find('div').empty()
    
    });
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




    // 컨펌 이벤트 처리
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

    // $(".banner_map").click(function () {
    //     $("#popup").css('display', 'flex').hide().fadeIn();
    // });

    // // Click event handler for the element with ID "confirm"
    // $("#confirm").click(function () {
    //     modalClose();
    // });

    // // Function to close the modal
    // function modalClose() {
    //     $("#popup").fadeOut();
    // }
})