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
      });


      // 아이콘 클릭 했을 때
var i=0;
$('#infor').click(function(){

    i++
    if(i==2)i=0
    if(i==1){
        $('.i_txt').addClass('visible');
        $('.i_txt').css ({'opacity':'1', 'visibility':'visible'})
    }
    else{
        $('.i_txt').removeClass('visible');
        $('.i_txt').css ({'opacity':'0', 'visibility':'hidden'});
    }
});
})