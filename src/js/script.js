
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
// worksページ コンテンツのアニメーション
gsap.utils.toArray('.js-work').forEach((target) => {
  gsap.fromTo(target, {
    autoAlpha: 0,
    y: 100,
  },{
    duration: 1,
    autoAlpha: 1,
    y: 0,
    scrollTrigger: {
      trigger: target,
      start: 'top 70%',
      // markers: true,
    },
  });
});


// Aboutページのアニメーション
gsap.utils.toArray(".js-item").forEach((item) => {
  gsap.fromTo(item, {
      autoAlpha: 0,
    },{
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top 58%",
        toggleActions:'play none none reverse',
      },
    }
  );
});

	// hamburger
  $('.js-hamburger').click(function(){
    $('.js-hamburger').toggleClass('is-active');
    $('.js-sp-nav').toggleClass('is-active'); //右からメニューが出てくる等の場合はこっちの記述
    $('html').toggleClass('is-fixed');  //ハンバーガー展開時に背景を固定
  })
  
  //header出現
  gsap.to('.js-header', 0.8, {
    autoAlpha: 1,
	y: 0,
  delay: 2.5,
});

//container 背景色
gsap.from(".container", {
  scrollTrigger: {
    trigger: ".container",
    start: "top 70%",
    end: "bottom bottom",
    scrub: true,
  },
  backgroundColor: "#DFFFFF",
  ease: "none",
});


//mv-titleアニメーション
new Vivus( "mv-title", {
  type: "delayed",  //アニメーションのタイプ
  duration: 150, //アニメーションの時間
  forceRender: false, //パスが更新で再レンダリングさせない
},
function (obj) {
  obj.el.classList.add("done"); //アニメーション後にdoneクラスを付与
}
);

//section-titleアニメーション
// クラス名が "js-title" の要素をすべて取得
var titles = document.querySelectorAll(".js-title");

titles.forEach(function(title) {
  // Vivusを使用してアニメーションを適用
  new Vivus(title.id, {duration: 120}, function () {
    // section-title内のpathの塗りの透明度を1にする
    Snap("#" + title.id).selectAll("path").animate({
      "fill-opacity": 1
    }, 120);
  });
});



//スクロール時headerに背景色
var Header = $(".header");
$(window).scroll(function(){
	if($(this).scrollTop() > 200) {
    // それを過ぎたら付与
		Header.addClass('is-color');
	} else {
    Header.removeClass('is-color');
	}
});

//スクロール判定しworks-list出現
$(window).scroll(function (){
  $('.js-fade').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
          $(function(){
            $('.js-fade').each(function(i){
              $(this).delay(i * 300).queue(function(){
                $(this).addClass('active');
              });
            });
          });
        }
      });
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








});
