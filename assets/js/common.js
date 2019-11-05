var document_w = $(window).width();
$(document).ready(function(){
	var current_scroll = "";
	if ( document_w > 1024 ){
		// pc gnb hover시
		$(".pc_header > ul").hover(function(){
			$(".header_wrap").stop().animate({height:"340px"}, "fast");
		}, function(){
			$(".header_wrap").stop().animate({height:"90px"}, "fast");
		});
	} else {
		// 태블릿이하 일때 auto
		$(".header_wrap").css("height", "");
	}

	// 추가 19.06.11
	if ( document_w > 720 ){
		$(".listTop.hide").addClass("listTop_hide");
	} else {
		$(".listTop.hide").removeClass("listTop_hide");
	}

	// 컨텐츠영역 사이즈 < 브라우저사이즈 때 - footer fixed
	if ( $(window).height() > $(".wrap").height() ){
		if ( !$(".subCon").hasClass("estim_select") ){ // 견적 상품선택 제외
			$("html").addClass("fixed_footer");
		}
	}

	// pc 검색 클릭
	$(".form_wrap dd > img").click(function(){
		$(this).next().stop().slideDown("fast");
	});

	// pc 검색 닫기
	$(".form_wrap dd .search_x").click(function(){
		$(this).parent().stop().slideUp("fast");
	});

	// 모바일 menu 클릭
	$(".menu_btn").click(function(){
		$(".menu_wrap").show().stop().animate({left:0}, "fast");
		$("html,  body").css({"overflowY":"hidden", "height":"100%"});
	});

	// 모바일 menu 클릭
	$(".menu_x, .menu_wrap .black_bg").click(function(){
		$(".menu_wrap").stop().animate({left:"-100%"}, "fast", function(){
			$(this).hide();
		});
		$("html,  body").css({"overflowY":"", "height":""});
	});

	// 모바일 gnb 클릭
	$(".menu ul li a").click(function(){
		if ( $(this).hasClass("on") ){
			$(this).removeClass("on");
			$(this).next().stop().slideUp("fast");
		} else {
			$(".menu ul li a").removeClass("on");
			$(".menu ul li ul").stop().slideUp("fast");

			$(this).addClass("on");
			$(this).next().stop().slideDown("fast");
		}
	});

	// 모바일 FAMILY SITE 클릭
	$(".menu_bottom dd span").click(function(){
		if ( !$(this).hasClass("on") ){
			$(this).addClass("on")
			$(this).next().stop().slideDown("fast");
		} else {
			$(this).removeClass("on")
			$(this).next().stop().slideUp("fast");
		}
	});

	// FAMILY SITE 클릭
	$(".familySite").click(function(){
		if ( !$(this).hasClass("on") ){
			$(this).addClass("on")
			$(this).next().stop().fadeIn("fast");
			$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "_on.png"));
		} else {
			$(this).removeClass("on")
			$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_on.png", ".png"));
			$(this).next().stop().fadeOut("fast");
		}
	});

    // location-bar
    $('.location > li').on('mouseover mouseenter', function(){
        $(this).find('ul').stop().slideDown('fast');
    });
    $('.location > li').on('mouseout mouseleave', function(){
        $(this).find('ul').stop().slideUp('fast');
    });

	// 로그인 팝업 클릭
	$(".loginBtn").click(function(){
		$(".login_wrap").stop().fadeIn("fast");
		$("html,  body").css({"overflowY":"hidden", "height":"100%"});
	});

	// 로그인 팝업 닫기
	$(".login_wrap .login_x, .login_wrap .black_bg").click(function(){
		$(".login_wrap").stop().fadeOut("fast");
		$("html,  body").css({"overflowY":"", "height":""});
	});

    // 비행 가능 지역 검색
    $('#flightSearch').click(function(){
        $('.flight-result').show();
    });

	// pc 상품 필터 전체 해제
	$(".checkAll_false").click(function(){
		$(".listTop input[type='checkbox']").prop("checked", false);
	});

	// 모바일 상품 필터 클릭
	$(".filter_icon").click(function(){
		if ( !$(this).parents(".listTop").hasClass("popup") ){
			$(this).parents(".listTop").addClass("popup");
			$(this).attr("src", $(this).attr("src").replace("filter_icon", "menu_x"));
			$("html,  body").css({"overflowY":"hidden", "height":"100%"});
		} else {
			$(this).parents(".listTop").removeClass("popup");
			$(this).attr("src", $(this).attr("src").replace("menu_x", "filter_icon"));
			$("html,  body").css({"overflowY":"", "height":""});
		}
	});

	// 필터 가격대 range
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 100, 500 ],
		slide: function( event, ui ) {
			var values01 = addComma(ui.values[0] * 10000);
			var values02 = addComma(ui.values[1] * 10000);
			$(".amount01").text(values01);
			$(".amount02").text(values02);
		}
	});

	// 필터 가격대값 삽입
	var values01 = addComma($("#slider-range").slider("values", 0) * 10000);
	var values02 = addComma($("#slider-range").slider("values", 1) * 10000);
	$(".amount01").text(values01);
    $(".amount02").text(values02);

    // tab menu
    $('.tab > li > a').on('click', function(){
		var i = $(this).closest('li').index();
		$('.tab > li').removeClass('on').eq(i).addClass('on');
		$('.tab-contents').removeClass('show').eq(i).addClass('show');
    });

    // faq accordian
    $('.question').click(function(){
        $('.answer').slideUp();
        $('.question').removeClass('active');
        if ($(this).parent().find('.answer').is(':hidden')){
            $(this).parent().find('.answer').slideDown();
            $(this).addClass('active');
        }
    });

	// 이용 지역 검색
	$(".reserveBtn").click(function(){
		$(".reserve_pop").stop().fadeIn("fast");
		$("html,  body").css({"overflowY":"hidden", "height":"100%"});
	});

	// 이용 지역 검색 닫기
	$(".reserve_pop .pop_x, .reserve_pop .black_bg").click(function(){
		$(this).parents(".reserve_pop").stop().fadeOut("fast");
		$("html,  body").css({"overflowY":"", "height":""});
	});

	// 아이디 찾기
	$('.searchId').click(function(){
		$('.search-id').show();
	});

	// 견적상품 전체 해제
	$(".estim_select .selectAll_false").click(function(){
		$(".bottom ul li input[type='checkbox']").prop("checked", false);
		$(".select_wrap li").remove();
	});

	// 선택상품 x 클릭
	$(document).on("click", ".estim_select .select_wrap li", function(){
		$(this).remove();
		$(".bottom ul li input[id="+ $(this).data("for") +"]").prop("checked", false);
	});

	// 견적상품 클릭시
	$(".estim_select .bottom ul li label").click(function(){
		if( !$(this).prev().is(":checked") ){ // 체크 x
			if ( !$(this).parents("td").hasClass("option") ){ // 옵션상품 아닐때
				var select_txt = $(this).find(".txt p").text();
				var label_for = $(this).attr("for");
				$(".select_wrap").append("<li data-for='"+ label_for +"'><span>"+ select_txt +"</span><img src='./assets/img/select_x.png' alt=''></li>");
			} else {  // 옵션상품 일때
				var select_txt = $(this).text();
				var label_for = $(this).attr("for");
				$(".select_wrap").append("<li data-for='"+ label_for +"'><span>"+ select_txt +"</span><img src='./assets/img/select_x.png' alt=''></li>");
			}
		} else { // 체크 o
			var label_for = $(this).attr("for");
			$(".select_wrap li").each(function(){
				if ( $(this).data("for") == label_for ){
					$(this).remove();
				}
			});
		}
	});

	// 모바일 견적상품 h2 클릭
	$(".estim_select .bottom h2").click(function(){
		if ( document_w <= 720 ){
			if ( !$(this).hasClass("on") ){
				$(".bottom h2").removeClass("on");
				$(".bottom ul").stop().slideUp("fast", function(){
					$(this).removeClass("on");
				});
				$(this).addClass("on");
				$(this).next().stop().slideDown("fast", function(){
					$(this).addClass("on");
				});
			} else {
				$(this).removeClass("on");
				$(this).next().stop().slideUp("fast", function(){
					$(this).removeClass("on");
				});
			}
		}
	});

	// 모바일 하단 ^ 클릭
	$(".estim_select .estim_selectTop").click(function(){
		if ( !$(this).hasClass("on") ){
			$(this).addClass("on");
			$(this).attr("src", $(this).attr("src").replace("_off.png", ".png"));
			$(this).parent().removeClass("off").addClass("on");
			$(".estim_select .btn_wrap").removeClass("off").addClass("on");
		} else {
			$(this).removeClass("on");
			$(this).attr("src", $(this).attr("src").replace(".png", "_off.png"));
			$(this).parent().removeClass("on").addClass("off");
			$(".estim_select .btn_wrap").removeClass("on").addClass("off");
		}
	});

	// 인증번호 받기 (2019.05.28 추가)
	$(".btn-certify").click(function(){
		$(".join-certify").show();
	});

	// 19.06.05 추가
	// 리뷰 등록 및 수정
	$(".review_edit").click(function(){
		$(".review_pop").stop().fadeIn("fast");
		$("html,  body").css({"overflowY":"hidden", "height":"100%"});
	});

	// 리뷰 등록 및 수정 닫기
	$(".review_pop .pop_x, .review_pop .black_bg").click(function(){
		$(this).parents(".review_pop").stop().fadeOut("fast");
		$("html,  body").css({"overflowY":"", "height":""});
	});

	// 리뷰 별점선택
	$(".reviewCon .star img").click(function(){
		var idx = $(this).index();
		$(".reviewCon .star img").attr("src", $(".reviewCon .star img").attr("src").replace("_on.png", "_off.png")).removeClass("on");
		$(this).parent().find("img").each(function(){
			if ( $(this).index() <= idx ){
				$(this).attr("src", $(this).attr("src").replace("_off.png", "_on.png")).addClass("on");
			}
		});
	});

	// 추가 19.06.11
	// 상품 필터 접혀있을때
	$(".listTop_hide h3").click(function(){
		if ( !$(this).hasClass("on") ){
			$(this).addClass("on");
			$(".listTop_hide .checkAll_false").stop().fadeIn("fast");
			$(".listTop_hide .btn_wrap").stop().fadeIn("fast");
			$(".listTop_hide > dl > dd").stop().slideDown("fast");
		} else {
			$(this).removeClass("on");
			$(".listTop_hide .checkAll_false").hide();
			$(".listTop_hide .btn_wrap").hide();
			$(".listTop_hide > dl > dd").stop().slideUp("fast");
		}
	});

	// 19.06.13 추가
	// 개인정보 및 개인정보 수집 동의
	$(".formBtn").click(function(){
		$(".infoForm_pop").stop().fadeIn("fast");
		$("html,  body").css({"overflowY":"hidden", "height":"100%"});
	});

	// 개인정보 및 개인정보 수집 동의 닫기
	$(".infoForm_pop .pop_x, .infoForm_pop .black_bg").click(function(){
		$(this).parents(".infoForm_pop").stop().fadeOut("fast");
		$("html,  body").css({"overflowY":"", "height":""});
	});

	// 추가 19.06.13
	// 지도 타입 변경
	$(".map-btn-wrap > a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});

	// 추가 19.06.17
	// 비밀번호 변경 팝업 닫기
	$(".password_pop .pop_x, .password_pop .black_bg").click(function(){
		$(this).parents(".password_pop").stop().fadeOut("fast");
		$("html,  body").css({"overflowY":"", "height":""});
	});

	// 추가 19.06.25
	// 인쇄하기 클릭
	$(".printBtn").click(function(){
		var popUrl ="./estimate-mail.html#print";
		var popOption = "width=1200px, height=800px, resizable=no, location=no, top=100px, left=100px;"
		window.open(popUrl,".print",popOption);
	});

	// 추가 19.06.26
	// 첨부파일
	var fileTarget = $('.btn-attach');
	fileTarget.on('change', function(){
		// 값이 변경되면
		if(window.FileReader){
			// modern browser
			var filename = $(this)[0].files[0].name;
		}
		else {
			// old IE
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
		}
		// 추출한 파일명 삽입
		$(this).siblings('.attach-name').val(filename);
	});
});

$(window).resize(function(){
	if (  $(window).width() != document_w ){
		$(".menu_wrap").css("left", "-100%");
		$(".menu_wrap").hide();
	}

	if ( $(".sub-cont-wrap").hasClass("no-title") ){
		var con_h = $(".sub-cont-wrap").height() + $(".sub-visual-wrap").height();
	} else {
		var con_h = $(".sub-cont-wrap").height();
	}

	if ( $(window).width() > 720 ){
		$(".estim_select .bottom ul").attr("style", "");
		$(".listTop.hide").addClass("listTop_hide"); // 추가 19.06.11
	} else {
		/*$(".estim_select .bottom ul").hide();
		$(".estim_select .bottom ul.on").show();*/
		// 추가 19.06.11
		$(".listTop").removeClass("listTop_hide");
		$(".listTop h3").removeClass("on");
		$(".listTop.hide .checkAll_false").attr("style", "");
		$(".listTop.hide .btn_wrap").attr("style", "");
		$(".listTop.hide > dl > dd").attr("style", "");
	}

	if ( $(window).width() > 1024 && !$(".subCon").hasClass("estim_select") ){ // pc // 견적상품 선택제외
		if ( $(window).height() > con_h + 679 ){ // 429 : header + location + footer
			$("html").addClass("fixed_footer");
		} else {
			$("html").removeClass("fixed_footer");
		}
	} else if ( $(window).width() <= 1024 && $(window).width() > 720 && !$(".subCon").hasClass("estim_select") ){ // 태블릿 // 견적상품 선택제외
		$(".header_wrap").css("height", "");

		if ( $(window).height() > con_h + 619 ){ // 619 : header + footer + sub-cont-wrap(padding)
			$("html").addClass("fixed_footer");
		} else {
			$("html").removeClass("fixed_footer");
		}
	} else if ( $(window).width() <= 720 && !$(".subCon").hasClass("estim_select") ){ // 모바일 // 견적상품 선택제외
		$(".header_wrap").css("height", "");

		if ( $(window).height() > con_h + 360 ){ // 360 : header + footer + sub-cont-wrap(padding)
			$("html").addClass("fixed_footer");
		} else {
			$("html").removeClass("fixed_footer");
		}
	}
});

function addComma(num) { // 원단위 콤마
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}
