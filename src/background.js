
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'command') {
    let port = chrome.runtime.connectNative('com.github.eks5115.shell.chrome.extension');

    port.onMessage.addListener((data) => {
      console.debug('command result: %o', data);
      sendResponse(data);
    });

    port.onDisconnect.addListener(function() {
      console.log("Disconnected");
    });

    port.postMessage({
      command: message.payload
    });
  }
});
