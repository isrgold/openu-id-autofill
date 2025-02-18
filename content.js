function clickElement() {
  const element = document.getElementById("p_mis_student");
  if (element) {
    element.focus();
    chrome.storage.local.get('data', function (result) {
      if (result.data) {
        element.value = result.data;
        element.click();
      }
    });
    element.addEventListener('input', function () {
      const userInput = element.value;
      chrome.storage.local.set({ data: userInput }, function () {
      });
    });
  }
  else {
    clickElement()
  }
  // const element1 = document.querySelector('[type=submit]');
  // const element1 = document.getElementById("login_sso");
  // console.log(element1);
  // setTimeout(function() {
  //   element1.submit();
  // }, 2000);
}

clickElement();
