$(function(){
	$('.button_promo, .js-calculator, .js-gallery, .js-promo, .js-advantages').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop:$($(this).attr("href")).offset().top + (-50)}, 1000);
	  e.preventDefault();
	});
});
//смена цвета топ меню
$(window).scroll(function() {
	if ($(this).scrollTop() > 90){
		$('.head').addClass("white-block");
		$('.logo__images').attr('src', 'img/logo.png');
	}
	else{
		$('.head').removeClass("white-block");
		$('.logo__images').attr('src', 'img/logo2.png');
	}
});
//меню
$(function(){
    $(".mobile-control").on("click", function(e){
        $(".menu").slideToggle(300);
		e.stopPropagation();
		return false;
    });
});

//Слайдер галерея
 $(function(){
  $('.slider-gallery').bxSlider({
    auto: false,
    moveSlides: 1,
    slideMargin:0,
    nextText:'',
    prevText:'',
	pager:false,
    controls: true,
    autoReload: true,
    breaks: [{screen:100, slides:1}, {screen:480, slides:1}, {screen:640, slides:1}, {screen:992, slides:1}, {screen:1200, slides:1}]
  });
 });

//Галлерея
$(function(){
   lightbox.option({
     'resizeDuration': 200,
     'showImageNumberLabel': false,
     'wrapAround':true
 });
});
// Scroll
$(document).ready(function() {
    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };
});
/*функция, отображающая результат на странице */
function changeResult(result){
document.getElementById('result').innerHTML = result;
}

/*функция, проводящая непосредственно вычисления */
function calculateForm(){
	var result = document.getElementById('bedroom').value*100+document.getElementById('WC').value*200;
	changeResult(result);
}
