const switchBtn = document.getElementById('switch');

chrome.storage.sync.get('disabled', function (data) {
    switchBtn.checked = !data.disabled;
});

switchBtn.addEventListener('change', function () {
    chrome.storage.sync.set({ disabled: !this.checked });
    chrome.browserAction.setIcon({ path: this.checked ? "images/byechuka_active.png" : "images/byechuka_disabled.png" });
});