//index.html

//Сладер object
 $(function(){
  $('.slider-object__content').bxSlider({
    auto: false,
    pause: 3000,
    slideWidth:340,
    minSlides: 1,
    maxSlides: 2,
    moveSlides: 1,
    slideMargin: 25,
    nextText:'',
    prevText:'',
    pager:false,
    controls: true,
    autoReload: true,
    breaks: [{screen:100, slides:1},{screen:480, slides:2}]
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

//Accordion
   $(document).ready(function(){
      $('.tabs').accordion({
          collapsible:true,
          heightStyle: "content",
          active:false
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
//   $(function(){
//       $(".rd-submenu-toggle").on("click", function(){
//           $(this).parent().find(".uk-dropdown-navbar").toggleClass('active');
//           $(this).parent().find("a").toggleClass('active');
//           return false;
//       });
//   });
   
//Sub menu open + rotate arrow submenu
   $(function(){
       $(".rd-submenu-toggle").on("click", function(){
           $(this).parent().find(".uk-dropdown-navbar").slideToggle(300);
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

//Галлерея
$(function(){
   lightbox.option({
     'resizeDuration': 200,
     'showImageNumberLabel': false,
     'wrapAround':false
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

//Fix menu
	$(function(){
		$(".mobile-navigation").stick_in_parent();
	});
//   $(function(){
//       $(window).scroll(function() {
//           var top = $(document).scrollTop();
//           if (top < 107) $(".mobile-wraper").css({top: '0', position: 'relative'});
//           else $(".mobile-wraper").css({top: '0px', position: 'fixed'});
//       });
//   });

//roll up
$(function(){
    $(".tabs__roll-up").on("click", function(){
        $(this).parent().parent().find(".tabs__info").slideToggle(500);
        $(this).parent().parent().find(".tabs__caption").removeClass('ui-accordion-header-active ui-state-active ui-corner-top').toggleClass('ui-corner-all').attr("aria-selected", "false").attr("aria-expanded", "false");
        $(this).parent().parent().find(".tabs__caption span").removeClass('ui-icon-triangle-1-s').toggleClass('ui-icon-triangle-1-e');
        return false;
    });
});
//cart close
$(document).ready(function(){
   $('.js-cart-close').click(function () {
       $('.cart').toggleClass('none');
       $('.ordering').toggleClass('block');
	   $(document).scrollTop(0);
   });
});
