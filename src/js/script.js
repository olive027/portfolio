
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

	// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').toggleClass('is-active'); //右からメニューが出てくる等の場合はこっちの記述
	$('html').toggleClass('is-fixed');  //ハンバーガー展開時に背景を固定
})

//mv
var Title = document.querySelectorAll('.js-subtitle');
Title.forEach((target) => {
	// h2タグ内のテキストを一文字ずつ分割
	target.innerHTML = target.textContent.replace(/\S/g,'<span>$&</span>')
});
gsap.utils.toArray(Title).forEach((t) => {
	gsap.to( t.querySelectorAll("span"),{ //アニメーションを適用するspan要素を取得
		delay: 0.8,
		autoAlpha: 1,
		x: 0,
		stagger: 0.08,
	});
});

var tl = gsap.timeline();
tl.to('.js-title', 0.8, {
  delay: 1.8,
  autoAlpha: 1,
  y: 0,
})
tl.to('.js-header', 0.8, {
	autoAlpha: 1,
	y: 0,
});


// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 1700,
  allowTouchMove: false,
});


//スクロールしたらheaderに背景色
var Header = $(".header");
$(window).scroll(function(){
	if($(this).scrollTop() > 200) {
		// それを過ぎたら付与
		Header.addClass('is-color');
	} else {
		Header.removeClass('is-color');
	}
});

// ページトップボタン
$(function () {
  const pageTop = $(".pagetop");
  pageTop.hide(); // 最初はボタンを非表示にする
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100pxスクロールしたら表示
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

	pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, // 上から0pxの位置に戻る
      },
      500 // 500ミリ秒かけて戻る
    );
    return false;
  });
});

// works説明文のアニメーション
// gsap.utils.toArray('.js-work').forEach(target => {
// gsap.fromTo(target, 1, {
// 	autoAlpha: 0,
// 	y: "100%",
// },{
// 	scrollTrigger: {
// 	trigger: target,
// 	start: 'top 85%',
// 	markers: true,
// 	},
// 	autoAlpha: 1,
// 	y: 0,
// });

// });

// アンカーリンクのジャンプ位置調整
$(function() {
    let pageHash = window.location.hash;
    if (pageHash) {
        let scrollToElement = $('[data-id="' + pageHash + '"]');
        if (!scrollToElement.length) return;
        $(window).on('load', function() {
            history.replaceState('', '', './');
            let locationOffset = scrollToElement.offset().top;
            let navigationBarHeight = $('.header').innerHeight();
            locationOffset = locationOffset - navigationBarHeight - 65;
            $('html, body').animate({
                scrollTop: locationOffset
            }, 300, 'swing');
        });
    }
});





});
