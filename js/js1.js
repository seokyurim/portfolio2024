$(function () {
    // 공통 변수
    var sections = $('.box>div');
    var wrap = $('#wrap');

    // 팝업 창 토글 함수
    function togglePopup(popupId) {
        $(popupId).css('display', 'flex').hide().fadeIn();
    }

    // 팝업 창 닫기 함수
    function closePopup(popupId) {
        $(popupId).fadeOut();
    }

    // 버튼 클릭 이벤트
    $('.btn').click(function () {
        var index = $(this).index('.btn');
        var popupId = '#popup' + index;
        togglePopup(popupId);
    });

    // 팝업 닫기 아이콘 클릭 이벤트
    $('.fa-times').click(function () {
        var index = $(this).closest('.popup').index();
        var popupId = '#popup' + index;
        closePopup(popupId);
    });

    // 섹션에 대한 마우스 이벤트 처리
    sections.mouseenter(function () {
        wrap.css({
            'background': 'linear-gradient(200deg, #FFEEAC, #5C82EE)',
            'transition': 'background 0.4s ease'
        });
    });

    sections.mouseleave(function () {
        wrap.css({
            'background': '#FAF5E9',
        });
    });

    // 아이콘 클릭 시 텍스트 토글 함수
    function toggleText(iconId, textClass) {
        var flag = 0;
        $(iconId).click(function () {
            flag++;
            if (flag == 2) flag = 0;
            if (flag == 1) {
                $(textClass).addClass('visible');
                $(textClass).css({
                    'opacity': '1',
                    'visibility': 'visible'
                });
            } else {
                $(textClass).removeClass('visible');
                $(textClass).css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
            }
        });
    }

    // 아이콘 클릭 이벤트 호출
    toggleText('#infor3', '.rdj_txt');
    toggleText('#infor1', '.nasa_txt');
    toggleText('#infor2', '.the_txt');
});