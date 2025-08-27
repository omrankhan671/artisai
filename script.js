function getResponse() {
  let input = document.getElementById("userInput").value;
  let chatBox = document.getElementById("chatBox");
  if (input.trim() !== "") {
    let userMsg = document.createElement("div");
    userMsg.innerHTML = "<b>You:</b> " + input;
    chatBox.appendChild(userMsg);

    let botMsg = document.createElement("div");
    botMsg.innerHTML = "<b>ArtisAI:</b> This is a demo response.";
    chatBox.appendChild(botMsg);

    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}