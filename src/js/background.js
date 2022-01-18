chrome.tabs.executeScript({
  code: `let token = document.querySelector('input[name="fb_dtsg"]').value;console.log(token)`
});