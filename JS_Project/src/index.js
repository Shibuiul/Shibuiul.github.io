$( document ).ready(function() {
	ymaps.ready(function() {
	    var myMap = new ymaps.Map('map', {
	            center: [55.751574, 37.573856],
	            zoom: 9,
	            controls: []
	        }, {
	            searchControlProvider: 'yandex#search'
	        });


	    $('#find').click(function(){
			var myGeocoder = ymaps.geocode($('#place').val());
			myGeocoder.then(function (res) {
			    myMap.geoObjects.add(res.geoObjects);

			    var location = res.geoObjects.get(0).geometry._coordinates;
			    myMap.setCenter(location);
			     
			     storedLocations = JSON.parse(localStorage.getItem('location'));

			     if (!storedLocations) {
			     	localStorage.setItem('location', JSON.stringify([location]));
			     } 
			     else {
			     	storedLocations.push(location);
			     	localStorage.setItem('location', JSON.parse(storedLocations));
			     };



			}, function (err) {
			    // Обработка ошибки.
			});
		});
	});
});




