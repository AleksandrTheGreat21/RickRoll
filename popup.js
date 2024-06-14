document.getElementById('redirectForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const videoUrl = document.getElementById('videoUrl').value;
  if (videoUrl.includes('youtube.com/watch')) {
    chrome.tabs.create({ url: videoUrl });
  } else {
    alert('Please enter a valid YouTube video URL.');
  }
});
