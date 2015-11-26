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

//Сладер photo
 $(function(){
  $('.slider-photo__content').bxSlider({
    auto: false,
    pause: 3000,
    slideWidth:285,
    minSlides: 1,
    maxSlides: 2,
    moveSlides: 2,
    slideMargin: 25,
    nextText:'',
    prevText:'',
    pager:false,
    controls: true,
    autoReload: true,
    //breaks: [{screen:100, slides:1},{screen:480, slides:2}]
  });
 });

//Сладер advance
 $(function(){
  $('.slider-advance__content').bxSlider({
    auto: false,
    pause: 3000,
    slideWidth:180,
    //minSlides: 1,
    //maxSlides: 6,
    moveSlides: 2,
    slideMargin: 25,
    nextText:'',
    prevText:'',
    pager:false,
    controls: true,
    autoReload: true,
    breaks: [{screen:0, slides:1},{screen:480, slides:2}]
  });
 });

//product.html

//Spinner
   $(document).ready(function() {
       $('.counter__prev').click(function () {
           var $input = $(this).parent().parent().find('input');
           var count = parseInt($input.val()) - 1;
           count = count < 1 ? 1 : count;
           $input.val(count);
           $input.change();
           return false;
       });
       $('.counter__next').click(function () {
           var $input = $(this).parent().parent().find('input');
           $input.val(parseInt($input.val()) + 1);
           $input.change();
           return false;
       });
   });


//Left menu open + rotate arrow
$(document).ready(function(){
   $('.mobile-menu__toogle').click(function () {
   var phone = $('.phone').css('display') == 'block';
       if (phone) {
           $(".phone").slideToggle(300);
       }
       $('.mobilepanel_toggle').toggleClass('active');
       $('.menu').toggleClass('open-sidebar');
   });
});

//Sub menu open + rotate arrow submenu
   $(function(){
       $(".rd-submenu-toggle").on("click", function(){
           $(this).parent().find(".uk-dropdown-navbar").toggleClass('active');
           $(this).parent().find("a").toggleClass('active');
           return false;
       });
   });

//Phone menu open
   $(function(){
       $(".mobile-menu__phone").on("click", function(){
           var mobilepanel = $('.menu').hasClass('open-sidebar');
           if (mobilepanel){
               $('.menu').removeClass('open-sidebar');
               $('.mobilepanel_toggle').removeClass('active');
           }
           $(".phone").slideToggle(300);
           return false;
       });
   });

//Сладер photo
$(function(){
 $('.catalog-photo__content').bxSlider({
   auto: false,
   pause: 3000,
   slideWidth:100,
   minSlides: 1,
   maxSlides: 2,
   moveSlides: 2,
   slideMargin: 15,
   nextText:'',
   prevText:'',
   pager:false,
   controls: true,
   autoReload: true,
   breaks: [{screen:0, slides:3},{screen:320, slides:3},{screen:480, slides:4}, {screen:750, slides:4}]
 });
});
