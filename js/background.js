google.load("language", "1");
function contextMenusOnClick(info,tab,opt) {
	var balloon;
	chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
		chrome.tabs.executeScript(tab.id,{file:'js/content.js',allFrames:true},function() {
			chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
				chrome.tabs.sendRequest(tab.id,{'method':'prepareBalloon'},function(){

	$.ajax({
		type:'POST',
		url : 'https://ajax.googleapis.com/ajax/services/language/translate',
		dataType : 'json',
		data : {
			q : info.selectionText,
			v : '1.0',
			langpair : opt
		},
		success : function(data){
			if(data.responseStatus == 200) {
				T = data.responseData.translatedText;
			} else {
				T = 'ERROR: '+data.responseDetails;
			}
			chrome.tabs.getSelected(null, function(tab) { // get selected string in current tab
				chrome.tabs.executeScript(tab.id,{file:'js/content.js',allFrames:true},function() {injCallBack(T)});
			});
		},
		error : function (xhr, status, error){
			T = 'Unexpeceted error occurred!';
			alert(T)
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
	console.log('response: %o',response);
};


function createcontextMenusOption(opt){
	var optString = '';
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
	var preferred = JSON.parse(localStorage.getItem('preferred'));
	chrome.contextMenus.removeAll();
	for (var i = 0, max = preferred.length; i < max; i++) {
		createcontextMenusOption(preferred[i]);
	}
	chrome.contextMenus.create({
		"title": t('settings'),
		"contexts":['selection'],
		"onclick": function(){
			window.open('options.html');
		}
	});
}


google.setOnLoadCallback(function(){
	LANGUAGES = google.language.Languages;
	start();
});