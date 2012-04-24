if(!window.TranslateSelectionIsActive){
	var createBalloon = function createBalloon(message){
		var rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
		var span = document.createElement('span');
		var msg = document.createElement('span');
		var loader = document.createElement('img');
		var pin = document.createElement('img');
		var close = document.createElement('img');
		close.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGVJREFUeNqckosJwDAIRI8u4ggZ+UbqKBnBWrCpHKFgHwjxEy8mARJ3tzCGTX+ZGTNUIjCkULlzo3b+Kq6bDCn5cIrPjC0f0p2pSlkvFWykWWajJg90+XOk9tC9a20/XPdrXAIMAGD+sgrlLETIAAAAAElFTkSuQmCC';
		span.appendChild(msg);
		span.appendChild(pin);
		span.appendChild(close);
		msg.appendChild(loader);
		document.body.appendChild(span);
		close.addEventListener('click',function(){
			balloon.close();
		},false);
		/* CSS for span */
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
		span.style.font = 'normal normal 12px sans-serif';
		span.style.zIndex = '100';
		span.style.background = 'rgba(10,10,10,.9)';
		span.style.color = '#FFF';
		span.style.position = 'absolute';
		span.style.width = ((rect.width - 30 > 150) ? rect.width - 30 : 150 ) + 'px';
		span.style.left = (rect.left) + 'px';
		span.style.top = (rect.top + rect.height*0 + window.pageYOffset + 8*1) + 'px';
		span.style.padding = '15px';
		span.style.borderRadius = '9px';
		/*CSS for loader*/
		loader.src='data:image/png;base64,R0lGODlhEAAQAPQAAAoKCv///w8PD8jIyH9/f/j4+NnZ2TAwMFxcXOjo6IyMjJycnCIiImtraz8/P7i4uKurqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==';
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
		/* CSS for pin */
		pin.style.backgroundAttachment = 'scroll';
		pin.style.backgroundClip = 'border-box';
		pin.style.backgroundColor = 'transparent';
		pin.style.backgroundImage = 'none';
		pin.style.backgroundOrigin = 'padding-box';
		pin.style.border = 'none';
		pin.style.color = 'white';
		pin.style.cursor = 'auto';
		pin.style.display = 'block';
		pin.style.fontFamily = 'sans-serif';
		pin.style.fontSize = '12px';
		pin.style.fontStyle = 'normal';
		pin.style.fontVariant = 'normal';
		pin.style.fontWeight = 'normal';
		pin.style.height = '8px';
		pin.style.left = '30px';
		pin.style.lineHeight = 'normal';
		pin.style.margin = '0px';
		pin.style.outlineColor = 'white';
		pin.style.outlineStyle = 'none';
		pin.style.outlineWidth = '0px';
		pin.style.padding = '0';
		pin.style.position = 'absolute';
		pin.style.right = 'auto';
		pin.style.textAlign = 'left';
		pin.style.top = 'auto';
		pin.style.verticalAlign = 'baseline';
		pin.style.width = '15px';
		pin.style.zIndex = 'auto';
		/* CSS for close */
		close.style.backgroundAttachment = 'scroll';
		close.style.backgroundClip = 'border-box';
		close.style.backgroundColor = 'transparent';
		close.style.backgroundImage = 'none';
		close.style.backgroundOrigin = 'padding-box';
		close.style.border = 'none';
		close.style.color = 'white';
		close.style.cursor = 'pointer';
		close.style.display = 'block';
		close.style.fontFamily = 'sans-serif';
		close.style.fontSize = '12px';
		close.style.fontStyle = 'normal';
		close.style.fontVariant = 'normal';
		close.style.fontWeight = 'normal';
		close.style.height = '12px';
		close.style.left = 'auto';
		close.style.lineHeight = 'normal';
		close.style.margin = '0px';
		close.style.padding = '0px';
		close.style.position = 'absolute';
		close.style.right = '3px';
		close.style.textAlign = 'left';
		close.style.top = '3px';
		close.style.width = '12px';
		close.style.zIndex = 'auto';
		/*
		* public object
		*/
		var balloon = {
			getBalloon : function() {
				return span;
			},
			placeTop : function(){
				span.style.marginTop = '-'+(span.clientHeight+20)+'px';
				pin.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAICAYAAAAm06XyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFJJREFUeNpi5OLiesZAJmACYilyNH79+lWKCUgwkGoASCPMZgYSDZBCdjZWCUIasWnGZwCGOOP///8xVHFzc4OoZ+h+xBba2AIEbhMujSAAEGAAqosagiN+lwwAAAAASUVORK5CYII=';
				pin.style.bottom = '-8px';
				pin.style.top = 'auto';
				if(span.offsetTop < 0) this.placeBorder();
			},
			placeBorder : function(){
				pin.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAICAYAAAAm06XyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFtJREFUeNpi/P//PwMuwM3N/QxISX39+hWrPBMBjSDwDMjGqoYRZjOagmdY1ErBGDCXYLP5GQ7HPCPk7GcM+MEzXJoJaWRADwOwn5EChxQgxcjFxUWORjAACDAA3JEavEG6L9MAAAAASUVORK5CYII=';
				pin.style.top = '-8px';
				pin.style.bottom = 'auto';
				span.style.marginTop = 0;
			},
			setText : function(txt){
				msg.innerHTML = txt;
			},
			close : function(){
				span.parentNode.removeChild(span);
			}
		};
		return balloon;
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
				balloon = createBalloon('...');
				balloon.placeTop();
				sendResponse({});
			}
			if(req.method == 'getContextMenus') {
				balloon.setText(req.string);
				balloon.placeTop();
				sendResponse({});
			}
		}
	);

}
window.TranslateSelectionIsActive = true;