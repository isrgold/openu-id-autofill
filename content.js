function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

function clickElement(element) {
  element.focus();
  chrome.storage.local.get('data', function (result) {
    if (result.data) {
      element.value = result.data;
      element.click();
    }
  });

  const saveData = function () {
    const userInput = element.value;
    chrome.storage.local.set({ data: userInput });
  };

  const debouncedSaveData = debounce(saveData, 500); // Debounce for 500ms

  element.addEventListener('input', debouncedSaveData);
}

function autoInput() {
  const element = document.getElementById("p_mis_student");
  if (element) {
    clickElement(element);
  }
  else {
    setTimeout(() => { clickElement(element) }, 2000);
  }
}

autoInput();