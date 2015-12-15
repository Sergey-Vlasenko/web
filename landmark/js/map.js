/*
 * 5 ways to customize the Google Maps infowindow
 * 2015 - en.marnoto.com
 * http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html
*/

// map center
var center = new google.maps.LatLng(48.4539923,-89.2512055);

// marker position
var factory = new google.maps.LatLng(48.4539923,-89.2512055);

function initialize() {
  var mapOptions = {
    center: center,
    zoom: 15,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  // marker options
  var marker = new google.maps.Marker({
    position: factory,
    map: map,
 icon: ('img/marker_map.png'),
    title:"Landmark Hotel"
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
