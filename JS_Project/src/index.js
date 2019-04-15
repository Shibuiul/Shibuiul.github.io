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
			var myGeocoder = ymaps.geocode($('#place').val());
			myGeocoder.then(function (res) {
			    myMap.geoObjects.add(res.geoObjects);

			     var location = res.geoObjects.get(0).geometry._coordinates;
			     myMap.center = location;
			     myMap.setBounds(location);
			}, function (err) {
			    // Обработка ошибки.
			});
		});
	});
});
