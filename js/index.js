// // 제이쿼리방식으로 시작할지 
// // 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){

 // 아티클 전환하기
// $('nav li').click(function(){

//     let i=$(this).index()
//     console.log(i);

//     $('article').removeClass('on')
//     $('article').eq(i).addClass('on')
    
// })
var welcomSection = $('.welcome-section'),
  		enterButton = welcomSection.find('.enter-button');
      
      setTimeout(function(){
      	welcomSection.removeClass('content-hidden');
      },800);
      
      enterButton.on('click',function(e){
      	e.preventDefault();
        welcomSection.addClass('content-hidden').fadeOut();
      })
})