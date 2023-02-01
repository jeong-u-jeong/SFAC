
// 스크롤시 헤더 고정
$(function(){
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 10){
			$(".header").css('background-color', '#303030'); //모바일 버전
            $('.lnb_outer').addClass('fixed'); //pc 버전
			$('.sub_lnb_box').css('top', '70px') //pc 버전 lnb 이동
        }else{
			$(".header").css('background-color', '');
			$('.lnb_outer').removeClass('fixed');
			$('.sub_lnb_box').css('top', '136px')
        }
    })

});


// PC버전 메뉴 마우스 오버시 드롭다운
$(function(){

    let lnbLi = $('.pc_lnb>li');

    lnbLi.mouseenter(function(){
		$(this).find('.sub_lnb_box').fadeIn(200);
		$(this).find('li').fadeIn(200);
    })

    lnbLi.mouseleave(function(){
        $(this).find('.sub_lnb_box').fadeOut(150);
		$(this).find('li').fadeOut(150);
    })



})


//  PC버전 서브메뉴 마우스 오버시 컬러 나타나기
$(function(){
    let subsubLi = $('.pc_main .pc_header .lnb_box .lnb li .sub_lnb_box .sub_lnb>li>ul>li');

    subsubLi.mouseenter(function(){
		$(this).find('div').css('opacity', '1');
    })

    subsubLi.mouseleave(function(){
		$(this).find('div').css('opacity', '0');
    }) 



})

/// 모바일버전 햄메뉴 열기
$(function (){
    //팝업 열기
    $('#ham_open').on('click',function(e){
        e.preventDefault();
        $('#ham_menu').css('left', '0');
        $("body").addClass('notScroll');
    })

    //팝업 닫기
    $('#ham_close').on('click',function(e){
        e.preventDefault();
        $('#ham_menu').css('left', '100%');
        $("body").removeClass('notScroll');
    })
});


// 모바일버전 햄메뉴 메뉴 클릭시 서브메뉴 나타나기
$(document).ready(function () {
	$(".ham_menu .menu>li").each(function () {
		$(this).click(function () {
			$(this).addClass("selected");                     
			$(this).siblings().removeClass("selected");
		});
	});
});


// 모바일, 테블릿 버전 visual_main 박스슬라이더
$(document).ready(function(){
	$('.poster').bxSlider({
		auto: true,
		speed: 500,
		pause: 4000,
		mode:'fade',
		autoControls: false,
		pager: false
	});	
});


// PC버전 visual_main 카드형 스와이퍼
var swiperCards = new Swiper(".pc_visual", {
	effect: "cards",
	cardsEffect: {
		perSlideRotate: 0,
		perSlideOffset: 30
	},
	initialSlide: 3,
	grabCursor: true,

	navigation : {
		nextEl : '.pc_visual .swiper-button-next',
		prevEl : '.pc_visual .swiper-button-prev', 
	},
	touchRatio: 0,//드래그 금지
	on: {
		slideChangeTransitionEnd: function(){
			if(this.activeIndex == 0) {
				$('.vistxt1 p').fadeIn(600);
				$('.vistxt2 p').hide();
				$('.vistxt3 p').hide();
				$('.vistxt4 p').hide();
				$('.vistxt1 div').show();
				$('.vistxt2 div').hide();
				$('.vistxt3 div').hide();
				$('.vistxt4 div').hide();
			} else if (this.activeIndex == 1) {
				$('.vistxt2 p').fadeIn(600);
				$('.vistxt1 p').hide();
				$('.vistxt3 p').hide();
				$('.vistxt4 p').hide();
				$('.vistxt2 div').show();
				$('.vistxt1 div').hide();
				$('.vistxt3 div').hide();
				$('.vistxt4 div').hide();
			} else if (this.activeIndex == 2) {
				$('.vistxt3 p').fadeIn(600);
				$('.vistxt1 p').hide();
				$('.vistxt2 p').hide();
				$('.vistxt4 p').hide();
				$('.vistxt3 div').show();
				$('.vistxt2 div').hide();
				$('.vistxt1 div').hide();
				$('.vistxt4 div').hide();
			} else if (this.activeIndex == 3) {
				$('.vistxt4 p').fadeIn(600);
				$('.vistxt1 p').hide();
				$('.vistxt2 p').hide();
				$('.vistxt3 p').hide();
				$('.vistxt4 div').show();
				$('.vistxt2 div').hide();
				$('.vistxt3 div').hide();
				$('.vistxt1 div').hide();
			}
		}
	}
});


// 공모전 스와이퍼
var swiper = new Swiper(".contestSlied", {
	spaceBetween: 10,
	slidesPerView: 1.5,
	breakpoints: { // 반응형 설정
		380: {
			slidesPerView: 1.8,
		},
		601: {
			slidesPerView: 3.5,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 30
		}
		}
});


// 공모전 탭 메뉴
$(function(){
    $('#con2_btn1').on('click', function(){
        $('#con2_tab1').fadeIn(500);
		$('#con2_tab2').fadeOut(500);
		$('#con2_btn1').css('background-color', '#FFBE49')
		$('#con2_btn2').css('background-color', 'white')
    });
    $('#con2_btn2').on('click', function(){
        $('#con2_tab2').fadeIn(500);
		$('#con2_tab1').fadeOut(500);
		$('#con2_btn2').css('background-color', '#FFBE49')
		$('#con2_btn1').css('background-color', 'white')
    });
});


// 웹메거진 mob 스와이퍼
var swiper = new Swiper(".webzineSwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	initialSlide: 1,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: { // 반응형 설정
		1024: {
			spaceBetween: 100
		}
	}
});


// 웹메거진 pc 스와이퍼
var swiper = new Swiper(".webzinePcSwiper", {
  slidesPerView: 2,
  slidesPerGroup : 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper_box .swiper-button-next",
    prevEl: ".swiper_box .swiper-button-prev",
  },
  on: {
	reachBeginning: function() {
		$('.swiper_box .swiper-button-next').show();
		$('.swiper_box .swiper-button-prev').hide();
	},
    reachEnd: function() {
		$('.swiper_box .swiper-button-next').hide();
		$('.swiper_box .swiper-button-prev').show();
	}
  }
});


// 푸터 패밀리사이트 메뉴 클릭
$(function(){
    $('#family_btn').on('click', function(){
        $('#family_menu').fadeToggle();
		$('#family_btn').toggleClass('family_menu_click');
    });
});
