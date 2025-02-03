// YOUTUBE FUNCTIONALITY

// Add an option to right-click video link -> Open with Looptube
document.addEventListener('mousedown', function(event) {
      const linkElement = event.target.closest('a');
      if (linkElement && linkElement.href.includes('youtube.com/watch')) {
              linkElement.setAttribute('data-youtube-link', 'true');
            }
});

// Add a link to Looptube on the video page itself for when you arrive at a video without opening
// with looptube.
function createLooptubeLink() {
  const videoId = new URLSearchParams(window.location.search).get('v');
  const existingLink = document.querySelector('.looptube-link');

  if (videoId) {
    if (!existingLink) {
      const titleElement = document.querySelector('h1.ytd-watch-metadata');
      if (titleElement) {
        const looptubeLink = document.createElement('a');
        looptubeLink.href = `https://looptube.io/?videoId=${videoId}`;
        looptubeLink.textContent = '▶️ Open with Looptube';
        looptubeLink.className = 'looptube-link';
        looptubeLink.style.cssText = `
          display: inline-block;
          margin-left: 10px;
          color: #065fd4;
          text-decoration: none;
          font-size: 0.9em;
        `;
        titleElement.appendChild(looptubeLink);
      }
    } else {
      // Update the existing link's href to the current video ID
      existingLink.href = `https://looptube.io/?videoId=${videoId}`;
    }
  }
}

// Run when the page loads
createLooptubeLink();

// Also run on YouTube's dynamic page changes
const observer = new MutationObserver(createLooptubeLink);
observer.observe(document.body, { childList: true, subtree: true });

// LOOPTUBE FUNCTIONALITY

// Add searchbar to search youtube
if (window.location.hostname === 'looptube.io') {
  function addYouTubeSearchBar() {
    const searchContainer = document.createElement('div');
    searchContainer.innerHTML = `
      <input type="text" id="youtubeSearch" placeholder="Search YouTube" 
             style="margin: 10px; padding: 5px; width: 300px;">
      <button id="searchButton" 
              style="padding: 5px 10px; margin: 10px;">
        Search YouTube
      </button>
    `;
    
    document.body.prepend(searchContainer);

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('youtubeSearch');

    searchButton.addEventListener('click', function() {
      const query = searchInput.value;
      if (query) {
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
      }
    });

    // Add event listener for Enter key
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        searchButton.click(); // Trigger the button click
      }
    });
  }

  // Run when the page loads
  addYouTubeSearchBar();
}
