if(!window.TranslateSelectionIsActive){
	var createBalloon = function createBalloon(message){
		window.getSelection().removeAllRanges();
		var span = document.createElement('span');
		var msg = document.createElement('span');
		var loader = document.createElement('img');
		loader.src='data:image/png;base64,R0lGODlhEAAQAPQAAAoKCv///w8PD8jIyH9/f/j4+NnZ2TAwMFxcXOjo6IyMjJycnCIiImtraz8/P7i4uKurqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==';
		loader.style.display = 'block';
		loader.style.margin = '0 auto';
		msg.appendChild(loader);
		var img = document.createElement('img');
		img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHRJREFUeNpi5OLiesZAGGQzEaHoEhCvJ0ZhHYggpHA9EJ8ipPArEDfDOPgUTgTiF4QUPgLimcgCuBR2AvFvQgpPQT3BgE/hXyCuxmYFusIlQHyVkMIPULcxEFI4DaoYK2AB4gdQ9kx8UcQCi0v04EAHAAEGAKutFVTam7ycAAAAAElFTkSuQmCC';
		var ximg = document.createElement('img');
		ximg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGVJREFUeNqckosJwDAIRI8u4ggZ+UbqKBnBWrCpHKFgHwjxEy8mARJ3tzCGTX+ZGTNUIjCkULlzo3b+Kq6bDCn5cIrPjC0f0p2pSlkvFWykWWajJg90+XOk9tC9a20/XPdrXAIMAGD+sgrlLETIAAAAAElFTkSuQmCC';
		img.style.position = 'absolute';
		img.style.bottom = '-15px';
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
		span.style.width = '480px';
		span.style.padding = '15px';
		span.style.borderRadius = '9px';
		span.style.marginTop = '-'+(span.clientHeight+15)+'px';
		span.appendChild(msg);
		span.appendChild(img);
		span.appendChild(ximg);
		return span;
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
				range.insertNode(balloon);
				balloon.style.marginTop = '-'+(balloon.clientHeight+15)+'px';
				sendResponse({});
			}
			if(req.method == 'getContextMenus') {
			console.log('getContextMenus')
//				var range = window.getSelection().getRangeAt(0);
				console.log('getContextMenus balloon:%o',balloon);
				balloon.getElementsByTagName('span')[0].innerHTML = req.string;
//				range.insertNode(balloon);
				balloon.style.marginTop = '-'+(balloon.clientHeight+15)+'px';
				sendResponse({});
			}
		}
	);

}
window.TranslateSelectionIsActive = true;