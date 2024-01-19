// // 제이쿼리방식으로 시작할지 
// // 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){



// 버튼을 누르면 팝업창이 띄워져라.
// pj01
    
        // modalClose();
        //컨펌 이벤트 처리
    
    $('#btn').click(function(){
    $('#popup').css('display','flex').hide().fadeIn();
});
    // $("#close").click(function(){
    //     modalClose();
    // });
    // function modalClose(){
    // $("#popup").fadeOut();
    // };

    $('.fa-times').click(function(){
    $('#popup').fadeOut();

});
// pj02
$('#btn1').click(function(){
    $('#popup1').css('display','flex').hide().fadeIn();
});
    // $("#close").click(function(){
    //     modalClose();
    // });
    // function modalClose(){
    // $("#popup").fadeOut();
    // };

    $('.fa-times').click(function(){
    $('#popup1').fadeOut();

});


// pj02
$('#btn2').click(function(){
    $('#popup2').css('display','flex').hide().fadeIn();
});
    // $("#close").click(function(){
    //     modalClose();
    // });
    // function modalClose(){
    // $("#popup").fadeOut();
    // };

    $('.fa-times').click(function(){
    $('#popup2').fadeOut();

});

    // project li에 마우스를 올렸을 때 배경색 원이 커지게 설정
// pj01
// $('.box div:nth-child(1)').mouseenter(function(e) {
//     $('#wrap').animate().css({
//         'backgroundColor': 'linear-gradient(200deg,#FFEEAC, #5C82EE)'
//     }, 400);
// });

// $('.box div:nth-child(1)').mouseleave(function(e) {
//     $('#wrap').removeClass();

// });
$('.box>div:nth-child(1)').mouseenter(function(e) {
    $('#wrap').removeClass()
    $('#wrap').addClass('on01')
});


// pj02
$('.box>div:nth-child(2)').mouseenter(function(e) {
    $('#wrap').removeClass()
    $('#wrap').addClass('on02')
});


// pj03

$('.box>div:nth-child(3)').mouseenter(function(e) {
    $('#wrap').removeClass()
    $('#wrap').addClass('on03')
});

$('.box div').mouseleave(function(e) {
 $('#wrap').removeClass()
});


// $('section').eq(1).find('.bg_circle').addClass('active');



// 아이콘 클릭 했을 때
var i=0;
$('#infor3').click(function(){

    i++
    if(i==2)i=0
    if(i==1){
        $('.rdj_txt').addClass('visible');
        $('.rdj_txt').css ({'opacity':'1', 'visibility':'visible'})
    }
    else{
        $('.rdj_txt').removeClass('visible');
        $('.rdj_txt').css ({'opacity':'0', 'visibility':'hidden'});
    }
});


var ii=0;
$('#infor1').click(function(){

    ii++
    if(ii==2)ii=0
    if(ii==1){
        $('.nasa_txt').addClass('visible');
        $('.nasa_txt').css ({'opacity':'1', 'visibility':'visible'})
    }
    else{
        $('.nasa_txt').removeClass('visible');
        $('.nasa_txt').css ({'opacity':'0', 'visibility':'hidden'});
    }
});


var a=0;
$('#infor2').click(function(){

    a++
    if(a==2)a=0
    if(a==1){
        $('.the_txt').addClass('visible');
        $('.the_txt').css ({'opacity':'1', 'visibility':'visible'})
    }
    else{
        $('.the_txt').removeClass('visible');
        $('.the_txt').css ({'opacity':'0', 'visibility':'hidden'});
    }
});




});

