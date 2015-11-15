/*
 * 5 ways to customize the Google Maps infowindow
 * 2015 - en.marnoto.com
 * http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html
*/

// map center
var center = new google.maps.LatLng(48.5161321,35.076883);

// marker position
var factory = new google.maps.LatLng(48.5163321,35.076883);

function initialize() {
  var mapOptions = {
    center: center,
    zoom: 17,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  // InfoWindow content
  var content =
   '<div id="map-info">' +
     '<div class="map-info__content">' +
       '<p class="map-info__text map-info__text_adress">Україна, 49074, м. Дніпропетровськ<br> вул. Батумська, буд. 2а</p>'+
       '<p class="map-info__text map-info__text_tel">тел: <span>(0562) 27-60-32</span> приймальня<br>тел: <span>(0562) 27-10-94</span> бухгалтерія</p>'+'<p class="map-info__text map-info__text_email">nrc_shans@mail.ru (адміністрація)<br> 256_internat@mail.ru (бухгалтерія)</p>'
      '</div>'+
    '</div>';

  // A new Info Window is created and set content
  var infowindow = new google.maps.InfoWindow({
    content: content,

    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 450
  });

  // marker options
  var marker = new google.maps.Marker({
    position: factory,
    map: map,
 icon: ('img/marker_map.png'),
    title:"Навчально - реабілітаційний центр 'ШАНС'"
  });

  // This event expects a click on a marker
  // When this event is fired the Info Window is opened.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  // Event that closes the Info Window with a click on the map
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
   var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});


    /*function windowSize(){
        if ($(window).width() <= '1200'){
            iwOuter.parent().parent().css({left: '40px', 'top':'10px'});
        } else {
            iwOuter.parent().parent().css({left: '340px', 'top':'190px'});
        }
    }
    //$(window).load(windowSize); // при загрузке
    //$(window).resize(windowSize); // при изменении размеров
    // или "два-в-одном", вместо двух последних строк:
    $(window).on('load resize',windowSize);*/

    // Позиция всплывающего окна
    iwOuter.parent().parent().css({left: '340px', 'top':'190px'});

    // Moves the shadow of the arrow 76px to the left margin.
    //iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    //Стрелка: поворот
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: -56px !important;' + 'top: 100px !important;' + 'transform: rotate(90deg);'});

    // Changes the desired tail shadow color.
    //Стрелка: цвет фона
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 0px 0px', 'z-index' : '1', 'background-color':'#3bab36', 'width': '100%', 'height': '100%'});
//Убрать 1/2 стрелки.
  iwBackground.children(':nth-child(3)').children(':nth-child(1)').css({'display':'none'});
    //Размер стрелки
      iwBackground.children(':nth-child(3)').children(':nth-child(2)').css({'width': '40px', 'height': '100px', 'top': '-73px', 'left': '10px'});
    //Reference to the div that groups the close button elements.
   var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '0', right: '0px', top: '10px'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    //if($('.iw-content').height() < 140){
      //$('.iw-bottom-gradient').css({display: 'none'});
    //}

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '0'});
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
