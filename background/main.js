chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.frameId !== 0) {
        return;
    }

    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content/main.js"]
    });
}, { url: [{ schemes: ['http', 'https'] }] });