A chrome extension to allow opening youtube videos with looptube.io (thereby bypassing ads).

When on youtube.com, you can right click any video link and then select "Open with Looptube".
Once on a youtube video page, there will also be an "Open with Looptube" link next to the video title.
Looptube does not have a search bar so we add one that will take you back to the relevant YouTube search results for your query. (Rendering these results in looptube would make things significantly more complex, requiring a Google Cloud project + api key + entering billing info. Linking back to the YouTube results keeps thing simple.)

## Loading the extension in Chrome

1. Clone this repo: `git clone https://github.com/hdmamin/looptube-chrome-extension.git`
2. Open Google chrome and go to chrome://extensions/
3. Enable "Developer mode" (click the slider on the top right)
4. Click "Load unpacked" and select the directory containing this file

If you make or pull code changes, refresh the extension by clicking the ⟳ symbol next to the extension in `chrome://extensions`.

---

Created with claude-3.5-sonnet followed by modifications in Cursor.
