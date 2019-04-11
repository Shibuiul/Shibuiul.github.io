$( document ).ready(function() {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
    $('#find').click(function(e){
myMap.center = '[' + $('#place').innerText + ']';
});
});



});
