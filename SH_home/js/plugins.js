//index.html
 //Сладер category
 $(function(){
  $('.slider-category').bxSlider({
    auto: false,
    pause: 3000,
	slideWidth:'100%',
   // minSlides: 1,
    //maxSlides: 6,
    moveSlides: 1,
    slideMargin:0,
    nextText:'',
    prevText:'',
    pager:true,
    controls: false,
    autoReload: true,
    breaks: [{screen:100, slides:1}]
  });
 });
 
//Сладер advice
 $(function(){
  $('.slider-advice').bxSlider({
    auto: false,
    pause: 3000,
    slideWidth:'auto',
    //minSlides: 1,
    //maxSlides: 2,
    moveSlides: 1,
    slideMargin:0,
    nextText:'',
    prevText:'',
    pager:true,
    controls: false,
    autoReload: true,
    breaks: [{screen:100, slides:1}, {screen:480, slides:2}, {screen:640, slides:3}, {screen:992, slides:5}, {screen:1200, slides:6}]
  });
 });
 
  //Сладер designer
 $(function(){
  $('.slider-designer').bxSlider({
    auto: false,
    pause: 3000,
	slideWidth:'auto',
    //minSlides: 6,
    //maxSlides: 6,
    moveSlides: 1,
    slideMargin:0,
    nextText:'',
    prevText:'',
    pager:true,
    controls: false,
    autoReload: true,
    breaks: [{screen:100, slides:1}, {screen:480, slides:2}, {screen:640, slides:3}, {screen:992, slides:5}, {screen:1200, slides:6}]
  });
 });
 
   //Сладер instagram
 $(function(){
  $('.slider-instagram').bxSlider({
    auto: false,
    pause: 3000,
	slideWidth:'auto',
    //minSlides: 6,
    //maxSlides: 6,
    moveSlides: 1,
    slideMargin:0,
    nextText:'',
    prevText:'',
    pager:true,
    controls: false,
    autoReload: true,
     breaks: [{screen:100, slides:1}, {screen:480, slides:2}, {screen:640, slides:3}, {screen:992, slides:5}, {screen:1200, slides:6}]
  });
 });