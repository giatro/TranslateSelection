var voidgif = $('<img/>').attr('class','void').attr('src','data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
var t = function t (str,op) {
	return chrome.i18n.getMessage(str,op) === "" ? str : chrome.i18n.getMessage(str);
}
/*
 * Set starting card
 */
$(document).ready(function() {
	var hash = location.hash || '#'+$('.card').attr('id');
	$($('.card')).removeClass('current');
	$(hash).addClass('current');
});
/**
 * Maps page target navigation to page card navigation
 */
window.addEventListener('hashchange',function(event){
	if(window.location.hash === '#-x') {
		window.close();
	}
	var fromCard = $('.card.current'), toCard = $(window.location.hash);
	if(toCard.length === 0) {
		return false;
	}
	$(toCard).addClass('current');
	$(toCard).removeClass('in reverse slide');
	$(fromCard).removeClass('current out reverse slide');
});

$(document).ready(function() {
	$('a.button.notxt').each(function(){
		$(this).attr('title',$(this).html());
		$(this).html('');
	});
	$('button').addClass('button');
});
function JSONSwitch(o) {
	var t = {};
	for (var i in o) {
		if(o.hasOwnProperty(i)){
			t[o[i]] = i;
		}
	}
	return t;
}