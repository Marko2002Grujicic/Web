function sendMessage() {
    var message = document.querySelector('#message-input').value;
    document.querySelector('#message-input').value = '';
    var messagesDiv = document.querySelector('#messages');
    messagesDiv.innerHTML += `<p>${message}</p>`;
  }