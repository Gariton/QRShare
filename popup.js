$(function () {
	let ACTIVE_TAB_DATA = {"Title":"","Url":""}

	function getTabData(DATA) {
		return new Promise((resolve, reject) => {
			chrome.tabs.getSelected(tab => {
				DATA.Title = tab.title;
				DATA.Url = tab.url;
				resolve(DATA);
			});
		});
	}

	getTabData(ACTIVE_TAB_DATA).then(() => {
		$('#tab_title').text(ACTIVE_TAB_DATA.Title);
		$('#qrcode').qrcode({width: 140, height: 140, text: ACTIVE_TAB_DATA.Url});
	});

});