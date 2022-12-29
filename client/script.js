var zoom = 1;
		
$('.zoom').on('click', function(){
    zoom += 0.1;
    $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoom-init').on('click', function(){
    zoom = 1;
    $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoom-out').on('click', function(){
    zoom -= 0.1;
    $('.target').css('transform', 'scale(' + zoom + ')');
});
var map = L.map("map", {
    layers: L.tileLayer("http://{s}.tile.cloudmade.com/API-key/997/256/{z}/{x}/{y}.png"),
    center: [51.505, -0.09],
    zoom: 3,
    minZoom: 2,
    maxZoom: 16,
    zoomControl: false
  })
   
  map.addControl(new L.Control.ZoomMin());
