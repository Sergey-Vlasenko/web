//index.html

//Сладер object
 $(function(){
  $('.slider').bxSlider({
    auto: false,
    pause: 3000,
    slideWidth:340,
    //minSlides: 1,
    //maxSlides: 2,
    moveSlides: 1,
    slideMargin: 10,
    nextText:'',
    prevText:'',
    pager:false,
    controls: true,
    autoReload: true,
    breaks: [{screen:100, slides:1}, {screen:480, slides:2}, {screen:640, slides:3}, {screen:992, slides:4}, {screen:1200, slides:4}]
  });
 });

 // Show Popup
jQuery(document).ready(function(jQuery) {
 jQuery('.button_reservation').click(function() {
   jQuery('.container-popup').css('display', 'block');

   // Hide body scrollbars
   jQuery('body').css('overflow', 'hidden');
 });
});
 // Hide popup
jQuery(document).ready(function(jQuery) {
 jQuery('.popup-close').click(function() {
   jQuery('.container-popup').css('display', 'none');
   jQuery('body').css('overflow', 'auto');
 });
});
