
let commandElement = document.getElementById('command');
let commitElement = document.getElementById('commit');

commitElement.onclick = function() {

  if (commandElement.value !== '') {
    chrome.runtime.sendMessage({
      type: 'command',
      payload: commandElement.value
    }, function(response){
      console.debug(response)
    });
  }
};
