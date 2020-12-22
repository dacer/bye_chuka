chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    chrome.storage.sync.get('disabled', function (data) {
        if (!data.disabled) {
            var url = tab.url;
            if (url.startsWith("https://www.amazon.co.jp/s") && !url.includes("AN1VRQENFRJN5")) {
                chrome.tabs.update(tab.id, { url: url + "&emi=AN1VRQENFRJN5" });
            }
        }
    });
});