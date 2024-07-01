async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const response = await fetch('/.netlify/functions/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();
    displayMessage('User', userInput);
    displayMessage('Assistant', data.response);
}

function displayMessage(sender, message) {
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="sender">${sender}:</span> <span class="text">${message}</span>`;
    chat.appendChild(messageElement);
}
