$(function(){
	$('.button_promo, .js-calculator, .js-gallery, .js-promo, .js-advantages').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop:$($(this).attr("href")).offset().top + (-50)}, 1000);
	  e.preventDefault();
	});
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 90){
		$('.head').addClass("white-block");
	}
	else{
		$('.head').removeClass("white-block");
	}
});

//Галлерея
$(function(){
   lightbox.option({
     'resizeDuration': 200,
     'showImageNumberLabel': false,
     'wrapAround':false
 });
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
