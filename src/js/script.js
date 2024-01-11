
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

	// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').toggleClass('is-active'); //右からメニューが出てくる等の場合はこっちの記述
	$('html').toggleClass('is-fixed');  //ハンバーガー展開時に背景を固定
})

//mv
var subTitle = document.querySelectorAll('.js-subtitle');
subTitle.forEach((target) => {
	// h2タグ内のテキストを一文字ずつ分割
	target.innerHTML = target.textContent.replace(/\S/g,'<span>$&</span>')
});
gsap.utils.toArray(subTitle).forEach((t) => {

	gsap.fromTo( t.querySelectorAll("span"),{ //アニメーションを適用するspan要素を取得
		autoAlpha: 0,
		x: "-100%",
	},{
		delay: 0.5,
		autoAlpha: 1,
		x: 0,
		stagger: 0.08,
	});
});

gsap.fromTo('.js-title', 1, {
	autoAlpha: 0,
	y: '100%',
},{
	delay: 1.2,
	autoAlpha: 1,
	y: 0,
});







});
