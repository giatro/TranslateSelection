chrome.extension.onRequest.addListener(
	function (req, sender,sendResponse) {
		if(req.method == 'get') {
			var str = window.getSelection().toString();
			if(str !== '') {
				sendResponse({'text' : str});
			}
		}
	}
);