if(!window.TranslateSelectionIsActive){
	var createBalloon = function createBalloon(message){
		var rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
		console.log(rect)
//		window.getSelection().removeAllRanges();
		var span = document.createElement('span');
		span.style.backgroundAttachment = 'scroll';
		span.style.backgroundClip = 'border-box';
		span.style.backgroundColor = 'transparent';
		span.style.backgroundImage = 'none';
		span.style.backgroundOrigin = 'padding-box';
		span.style.borderRadius = '0';
		span.style.bordeStyle = 'none';
		span.style.color = 'white';
		span.style.cursor = 'auto';
		span.style.display = 'block';
		span.style.fontFamily = 'sans-serif';
		span.style.fontSize = '12px';
		span.style.fontStyle = 'normal';
		span.style.fontVariant = 'normal';
		span.style.fontWeight = 'normal';
		span.style.height = 'auto';
		span.style.left = 'auto';
		span.style.lineHeight = 'normal';
		span.style.margin = '0';
		span.style.padding = '0px';
		span.style.position = 'absolute';
		span.style.right = '3px';
		span.style.top = '3px';
		span.style.width = '12px';
		span.style.zIndex = 'auto';
		span.style.textAlign = 'left';
		var msg = document.createElement('span');
		var loader = document.createElement('img');
		loader.src='data:image/png;base64,R0lGODlhEAAQAPQAAAoKCv///w8PD8jIyH9/f/j4+NnZ2TAwMFxcXOjo6IyMjJycnCIiImtraz8/P7i4uKurqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==';
		loader.className = 'loader';
		loader.style.backgroundAttachment = 'scroll';
		loader.style.backgroundClip = 'border-box';
		loader.style.backgroundColor = 'transparent';
		loader.style.backgroundImage = 'none';
		loader.style.backgroundOrigin = 'padding-box';
		loader.style.borderRadius = '0';
		loader.style.bordeStyle = 'none';
		loader.style.color = 'white';
		loader.style.cursor = 'pointer';
		loader.style.display = 'block';
		loader.style.fontFamily = 'sans-serif';
		loader.style.fontSize = '12px';
		loader.style.fontStyle = 'normal';
		loader.style.fontVariant = 'normal';
		loader.style.fontWeight = 'normal';
		loader.style.height = '12px';
		loader.style.left = 'auto';
		loader.style.lineHeight = 'normal';
		loader.style.margin = '0 auto';
		loader.style.padding = '0px';
		loader.style.position = 'static';
		loader.style.width = '12px';
		loader.style.zIndex = 'auto';
		msg.appendChild(loader);
		var img = document.createElement('img');
//		img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHRJREFUeNpi5OLiesZAGGQzEaHoEhCvJ0ZhHYggpHA9EJ8ipPArEDfDOPgUTgTiF4QUPgLimcgCuBR2AvFvQgpPQT3BgE/hXyCuxmYFusIlQHyVkMIPULcxEFI4DaoYK2AB4gdQ9kx8UcQCi0v04EAHAAEGAKutFVTam7ycAAAAAElFTkSuQmCC';
		img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAICAYAAAAm06XyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFJJREFUeNpi5OLiesZAJmACYilyNH79+lWKCUgwkGoASCPMZgYSDZBCdjZWCUIasWnGZwCGOOP///8xVHFzc4OoZ+h+xBba2AIEbhMujSAAEGAAqosagiN+lwwAAAAASUVORK5CYII=';
		var ximg = document.createElement('img');
		ximg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGVJREFUeNqckosJwDAIRI8u4ggZ+UbqKBnBWrCpHKFgHwjxEy8mARJ3tzCGTX+ZGTNUIjCkULlzo3b+Kq6bDCn5cIrPjC0f0p2pSlkvFWykWWajJg90+XOk9tC9a20/XPdrXAIMAGD+sgrlLETIAAAAAElFTkSuQmCC';
		img.style.position = 'absolute';
		img.style.bottom = '-8px';
		img.style.left = '30px';
		img.style.border = 'none';
		ximg.style.position = 'absolute';
		ximg.style.top = '3px';
		ximg.style.right = '3px';
		ximg.style.border = 'none';
		ximg.addEventListener('click',function(){
			span.parentNode.removeChild(span);
		},false);
		ximg.style.cursor = 'pointer';
		span.style.font = 'normal normal 12px sans-serif';
		span.style.zIndex = '100';
		span.style.background = 'rgba(10,10,10,.9)';
		span.style.color = '#FFF';
		span.style.position = 'absolute';
		span.style.width = (rect.width - 30) + 'px';
		span.style.left = (rect.left) + 'px';
		span.style.top = (rect.top + rect.height*0 + window.pageYOffset + 8*1) + 'px';
		span.style.padding = '15px';
		span.style.borderRadius = '9px';
//		span.style.marginTop = '-'+(span.clientHeight+15)+'px';
		span.appendChild(msg);
		span.appendChild(img);
		span.appendChild(ximg);
		return span;
//		return {
//			getBalloon = function() {
//				return span;
//			},
//			placeTop = function(){
//				span.style.marginTop = '-'+(span.clientHeight+20)+'px';
//			},
//			placeBorder = function(){
//				span.style.marginTop = 0;
//			},
//			setText = function(txt){
//				msg.innerHTML = txt;
//			}
//		}
	}
	chrome.extension.onRequest.addListener(
		function (req, sender,sendResponse) {
			if(req.method == 'get') {
				var str = window.getSelection().toString();
				if(str !== '') {
					sendResponse({'text' : str});
				}
			}
			if(req.method == 'prepareBalloon') {
				var range = window.getSelection().getRangeAt(0);
				balloon = createBalloon('...');
				document.body.appendChild(balloon);
				balloon.style.marginTop = '-'+(balloon.clientHeight+20)+'px';
				sendResponse({});
			}
			if(req.method == 'getContextMenus') {
				balloon.getElementsByTagName('span')[0].innerHTML = req.string;
				balloon.style.marginTop = '-'+(balloon.clientHeight+20)+'px';
				console.log(balloon.clientHeight)
				if(balloon.offsetTop < 0) {
					balloon.style.marginTop = 0;
				}
//				if(balloon.clientWidth + balloon.offsetLeft > document.documentElement.clientWidth) {
//					balloon.style.marginLeft = '-'+(balloon.clientWidth + balloon.offsetLeft - document.documentElement.clientWidth)+'px';
//				}
//				if(balloon.offsetLeft < 0) {
//					var delta = balloon.offsetLeft;
//					balloon.style.marginLeft = 0;
//					balloon.style.marginLeft = '-'+(balloon.clientWidth + balloon.offsetLeft - document.documentElement.clientWidth + delta)+'px';
//				}
				sendResponse({});
			}
		}
	);

}
window.TranslateSelectionIsActive = true;