// script.js
const messages = [
    "Espero ques estés teniendo un lindo día, así como tú <3",
    "También espero que te sientas ya un poquito mejor y que ya no estés troste",
    "Siempre cuentas conmigo",
    "Estaré aquí para escucharte y para quererte, esto no lo olvides",
    "Te quiero demasiado mi chiquita hermosa",
    "Y recuerda que yo soy celoso y tu eres mía jaja",
    "Besitos mi amorrrrrrrrrrrrrrr"
];

let currentMessageIndex = 0;

const messagesContainer = document.getElementById("messages-container");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
    const message = messages[currentMessageIndex];
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.textContent = message;

    messagesContainer.appendChild(messageElement);

    currentMessageIndex++;

    if (currentMessageIndex === messages.length) {
        const heartElement = document.createElement("div");
        heartElement.className = "heart";
        heartElement.textContent = "❤️";

        messagesContainer.appendChild(heartElement);
        nextButton.disabled = true;
    }
});
