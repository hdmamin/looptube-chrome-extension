chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openWithLooptube",
    title: "Open with Looptube",
    contexts: ["link"],
    documentUrlPatterns: ["*://*.youtube.com/*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openWithLooptube") {
    const videoId = extractVideoId(info.linkUrl);
    if (videoId) {
      chrome.tabs.update({
        url: `https://looptube.io/?videoId=${videoId}`
      });
    }
  }
});

function extractVideoId(url) {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

