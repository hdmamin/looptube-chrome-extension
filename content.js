document.addEventListener('mousedown', function(event) {
      const linkElement = event.target.closest('a');
      if (linkElement && linkElement.href.includes('youtube.com/watch')) {
              linkElement.setAttribute('data-youtube-link', 'true');
            }
});

