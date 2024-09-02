chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'connectWallet') {
    window.diam
      .connect()
      .then((result) => {
        sendResponse({ publicKey: result.message[0] });
      })
      .catch((error) => {
        sendResponse({ error: 'Failed to connect wallet' });
      });
  }
});

/*chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  if (request.message === 'open_extension') {
    window.diam
      .connect()
      .then((result) => {
        sendResponse({ response: 'Diam Wallet opened successfully' });
      })
      .catch((error) => {
        console.error('Error opening Diam Wallet:', error);
        sendResponse({ error: 'Failed to open Diam Wallet' });
      });
  }
});*/