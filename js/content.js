if(!window.TranslateSelectionIsActive){
	chrome.extension.onRequest.addListener(
		function (req, sender,sendResponse) {
			if(req.method == 'get') {
				var str = window.getSelection().toString();
				if(str !== '') {
					sendResponse({'text' : str});
				}
			}
			if(req.method == 'getContextMenus') {
				var div = document.createElement('span');
				var range = window.getSelection().getRangeAt(0);
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
					div.parentNode.removeChild(div);
				},false);
				ximg.style.cursor = 'pointer';
				div.style.font = 'normal normal 12px sans-serif';
				div.style.zIndex = '10000';
				div.style.background = 'rgba(10,10,10,.9)';
				div.style.color = '#FFF';
				div.style.position = 'absolute';
				div.style.width = '480px';
				div.style.padding = '15px';
				div.style.borderRadius = '9px';
				div.innerHTML = req.string;
				range.insertNode(div);
				div.style.marginTop = '-'+(div.clientHeight+15)+'px';
				div.appendChild(img);
				div.appendChild(ximg);
				sendResponse({});
			}
		}
	);
}
window.TranslateSelectionIsActive = true;