const socket = io();

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    socket.emit("message", message);
    messageInput.value = "";
}

socket.on("message", (message) => {
    const messagesDiv = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
});
