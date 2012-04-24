function contextMenusOnClick(info,tab,opt) {
	var balloon;
	chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
		chrome.tabs.executeScript(tab.id,{file:'js/content.js',allFrames:true},function() {
			chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
				chrome.tabs.sendRequest(tab.id,{'method':'prepareBalloon'},function(){
					var F = info.selectionText;
					$.ajax({
						url : 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate',
						data : {
							'appId'       : '76518BFCEBBF18E107C7073FBD4A735001B56BB1',
							'text'        : F,
							'from'        : opt.split("|")[0],
							'to'          : opt.split("|")[1],
							'contentType' : 'text/plain'
						},
						'success' : function(T)  {
							chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
								chrome.tabs.executeScript(tab.id,{file:'js/content.js',allFrames:true},function() {injCallBack(T)});
							});
						},
						'error' : function(jqXHR, textStatus, errorThrown) {
							var T = 'ERROR! ' + textStatus;
							chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
								chrome.tabs.executeScript(tab.id,{file:'js/content.js',allFrames:true},function() {injCallBack(T)});
							});
						}
					});
				})
			});
		});
	});
}

var injCallBack = function(S){
	chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
		chrome.tabs.sendRequest(tab.id,{'method':'getContextMenus','string':S}, getRequestResponseCallback)
	});
}
var getRequestResponseCallback = function getRequestResponseCallback(response) {
	/*
	* TODO
	*/
};


function createcontextMenusOption(opt){
	var optString = '';
	alert(opt);
	console.log(opt);
	var L = JSONSwitch(LANGUAGES);
	optString += opt.split('|')[0] ? L[opt.split('|')[0]] : t('detectLanguage');
	optString += ' » ';
	optString += opt.split('|')[1] ? L[opt.split('|')[1]] : t('detectLanguage');
	chrome.contextMenus.create({
		"title": optString,
		"contexts":['selection'],
		"onclick": function(opt){
			return function(info,tab) {
				contextMenusOnClick(info,tab,opt)
			}
		}(opt)
	});
}

function start() {
	if(localStorage.getItem('version') === null) {
		localStorage.setItem('version','0');
	}
	if(localStorage.getItem('version') !== null && localStorage.getItem('version') !== '1.1.8'){
		window.open('info.html');
		localStorage.setItem('version','1.1.8');
	}
	if (localStorage.getItem('from') === null) {
		localStorage.setItem('from', '');
	}
	
	if (localStorage.getItem('to') === null) {
		localStorage.setItem('to', '');
	}
	if (localStorage.getItem('preferred') === null) {
		localStorage.setItem('preferred', JSON.stringify(["|"+window.navigator.language]));
		window.open('options.html');
	}
	var preferred = JSON.parse(localStorage.getItem('preferred'));
	chrome.contextMenus.removeAll();
	for (var i = 0, max = preferred.length; i < max; i++) {
		createcontextMenusOption(preferred[i]);
	}
}


$(document).ready(function(){
	LANGUAGES = {};
	LOCALE = "";
	chrome.i18n.getAcceptLanguages( function(L) {
		LOCALE = L[0];
		currentLanguages = Microsoft.Translator.GetLanguages();
		languageNames = Microsoft.Translator.getLanguageNames(LOCALE);
		for(var i = 0; i < currentLanguages.length; i++) {
			LANGUAGES[languageNames[i]] = currentLanguages[i];
		}
		start();
	} );
});
