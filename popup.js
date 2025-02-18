document.getElementById('user_input').addEventListener('input', function () {
  const userInput = document.getElementById('user_input').value;
  chrome.storage.local.set({ data: userInput }, function () {
  });
});

// (Optional) Pre-fill input with previously saved data on load
chrome.storage.local.get('data', function (result) {
  if (result.data) {
    document.getElementById('user_input').value = result.data;
  }
});

// Request focus on the input field when the page loads
document.getElementById("user_input").focus();