google.load("language", "1");
function start() {
	setStrings()
	init();
};
function setStrings(){
	$('#selFrom option:first-child').html(t('detectLanguage'));
	$('#selTo option:first-child').html(t('automatic'));
	$('label[for="from"]').html(t('sourceText'));
	$('label[for="to"]').html(t('translatedText'));
	$('#extdescription').html(t('extDescription'));
	$('#nosave').html(t('noSaveNeeded'));
}

var savePrefs = function savePrefs() {
	var preferred = [];
	for (var i = 0, max = $('select[name=preffrom]').length; i < max; i++) {
		preferred.push($($('select[name=preffrom]').get(i)).val() + '|' + $($('select[name=prefto]').get(i)).val());
	}
	localStorage.setItem('preferred', JSON.stringify(preferred));
	init();
	chrome.extension.getBackgroundPage().start();
};
function init(){
	$('.preferredrow, #fromto option').remove();
	if (localStorage.getItem('from') === null) {
		localStorage.setItem('from', '');
	}
	
	if (localStorage.getItem('to') === null) {
		localStorage.setItem('to', '');
	}
	if (localStorage.getItem('preferred') === null) {
		localStorage.setItem('preferred', JSON.stringify(["|"+window.navigator.language]));
		window.location.hash = 'options';
	}
	var preferred = JSON.parse(localStorage.getItem('preferred'));
	for (var i = 0, max = preferred.length; i < max; i++) {
		var un;
		createPreferredRow(un, preferred[i]);
		var optString = '';
		var L = JSONSwitch(LANGUAGES);
		optString += preferred[i].split('|')[0] ? L[preferred[i].split('|')[0]] : t('detectLanguage');
		optString += ' &raquo; ';
		optString += preferred[i].split('|')[1] ? L[preferred[i].split('|')[1]] : t('detectLanguage');
	}
}
var createPreferredRow = function(event, pair) {
	if (typeof event === 'object') {
		event.preventDefault();
	}
	var spf = $('<select name="preffrom"/>').change(savePrefs);
	var spt = $('<select name="prefto"/>').change(savePrefs);
	$('<option>').attr('value', '').html(t('detectLanguage')).appendTo(spf);
	for (var currlang in LANGUAGES) {
		if(LANGUAGES[currlang]) {
			$('<option>').attr('value', LANGUAGES[currlang]).html(LANGUAGES[currlang] ? currlang : t('detectLanguage')).appendTo(spf);
			$('<option>').attr('value', LANGUAGES[currlang]).html(LANGUAGES[currlang] ? currlang : t('detectLanguage')).appendTo(spt);
		}
	}
	var plusButton = $('<button>').addClass('button ico notxt icon-plus').click(function(event) {
		event.preventDefault();
		createPreferredRow(event, "|");
		savePrefs()
	}).html(t('add')).attr('title',t('add'));
	var minusButton = $('<button>').addClass('button ico notxt icon-minus').click(function(event) {
		event.preventDefault();
		
		if ($('div.preferredrow', $(this).closest('div').closest('form')).length > 1) {
			$(this).closest('div').remove();
			savePrefs()
		}
	}).html(t('remove')).attr('title',t('remove'));
	$(spf).val(pair.split("|")[0]);
	$(spt).val(pair.split("|")[1]);
	$('<div>').addClass('preferredrow').append(spf).append(spt).append(plusButton).append(minusButton).appendTo($('form'));
}

var doTranslation = function doTranslation() {
	var F = $('#from').val(),
	    T = '';
	    fromCode =  $('#fromto').val().split('|')[0],
	    toCode = $('#fromto').val().split('|')[1] ? $('#fromto').val().split('|')[1] : window.navigator.language;
	google.language.translate(F,fromCode,toCode,function(result){
		if(result.status.code == 200){
			T = result.translation;
		} else {
			if(F.replace(/^\s+|\s+$/)!=='') T = "ERROR!\n"+result.error.message
		}
		$('#to').html(T);
	})
};
/*
 * Defaults
 */
google.setOnLoadCallback(function(){
	LANGUAGES = google.language.Languages;
	start();
});