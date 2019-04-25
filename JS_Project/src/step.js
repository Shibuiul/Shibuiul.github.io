var searchedLocations = JSON.parse(localStorage.getItem('location'))
if (searchedLocations != undefined) {
	var list = document.createElement('ul');
	document.body.prepend(list);
	for (var i = 0; i < searchedLocations.length; i++) {
		var listItem = document.createElement('li'),
			itemLink = document.createElement('a');
		list.appendChild(listItem);
		listItem.appendChild(itemLink);
		itemLink.innerHTML = searchedLocations[i];
		itemLink.href = 'index.html';
	};
	$('ul > li > a').click(function(e){
	localStorage.setItem('history', e.currentTarget.innerHTML);
});	
};

$('#historyClear').click(function(){
	for (var i = 0; i < $('ul > li > a').length; i++) {
		$('ul > li > a')[i].innerHTML = "";
	};
	localStorage.removeItem('location');
	filler = document.createElement('p');
	list.prepend(filler);
	filler.innerHTML = 'Готово, обновите страницу';
});


if (searchedLocations === null) {
	var nothing = document.body.appendChild(document.createElement('h1')),
		filler = document.createElement('a');

		nothing.innerHTML = 'Здесь пусто, попробуйте поиск';
		nothing.appendChild(filler);
		filler.innerHTML = 'Попробовать =)';
		filler.href = 'index.html';

}