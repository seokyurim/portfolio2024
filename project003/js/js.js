// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){



    // ARTICLE에 마우스가 들어갔을 때, 
    // 내가 가로값이 자연스럽게 늘어난다.
    // article 나의 자손인 비디오가 서서히 보여라
    $('article').mouseenter(function(){

        $(this).stop().animate({'width':'50%'},1000,function(){
            $(this).find('h3').stop().animate({'right':'10px'},200);
            $(this).find('p').stop().animate({'right':'10px'},500)
        })
        $(this).find('video').stop().animate({'opacity':'0.9'},1300)
    });
    $('article').mouseleave(function(){

        $(this).stop().animate({'width':'12%'},500)
        $(this).find('video').stop().animate({'opacity':'0'},2000)
        $(this).find('h3').stop().animate({'right':'-310px'},200);
        $(this).find('p').stop().animate({'right':'-310px'},200)
    });

// 메뉴바 클릭 하면 옆으로 나와라
 $('.fa-bars').click(function(){
    $('#menu').stop().animate({'left':0},200)
    $('html body').css({'background':'black'},200)
    
    $('.fa-times-circle-o').click(function(){
    $('#menu').stop().animate({'left':'-100%'},200)
    })
});

// 색션화면
$('section').mousewheel(function(event, delta){
    event.preventDefault()
    // 마우스 휠을 올렸을 때
    if(delta>0){
        var prev = $(this).prev().offset().top;
        $('html, body').stop().animate({'scrollTop':prev},1500,'easeOutBounce')

    }
    // 휠을 내렸을 때
    else if(delta<0){
        var next = $(this).next().offset().top
        $('html, body').stop().animate({'scrollTop':next},1500,'easeOutBounce')

    }
    
})
$('header').mousewheel(function(event, delta){
    event.preventDefault()
    // 마우스 휘을 올렸을 때
    if(delta>0){
        var prev = $(this).prev().offset().top
        $('html, body').stop().animate({'scrollTop':prev},1500,'easeOutBounce')

    }
    // 휠을 내렸을 때
    else if(delta<0){
        var next = $(this).next().offset().top
        $('html, body').stop().animate({'scrollTop':next},1500,'easeOutBounce')

    }
    
});

// wrap03 설정
var bb =0;
$('.box2 p').click(function(){

    bb++
    $('.box2 ul').css({'left':-300*bb})
    $('.box2 li').removeClass('on');
    
    $('.box2 li').eq(bb+3).addClass('on')
    $('.box2 li').eq(bb-1).clone().appendTo('.box2 ul')
    
    var onListItem = document.querySelector('.on');

      if (!onListItem) {
        // 'on' 클래스가 없을 때 모든 이미지에 'no-drop-shadow' 클래스를 추가
        var allImages = document.querySelectorAll('.box2 img');
        allImages.forEach(function(image) {
          image.classList.add('no-drop-shadow');
        });
      }

})
    setInterval(function(){
        $('.box2 p').trigger('click')
    },2000);

    $(".draw").addClass("-do");

})


    // const pagetitle = document.querySelector(".pagetitle");
    // const textmain = () => {
    //   setTimeout(() => {
    //     pagetitle.textContent = "Let's take a look at his performance!";
    //   }, 0);
    
    //   setTimeout(() => {
    //     pagetitle.textContent = "his name is";
    //   }, 3000);
    
    //   setTimeout(() => {
    //     pagetitle.textContent = "ROBERT DOWNEY JR.";
    //     setTimeout(textmain, 3000);
    //   }, 6000);
    
    // }
    // textmain();
    // setInterval(textmain, 9000);


