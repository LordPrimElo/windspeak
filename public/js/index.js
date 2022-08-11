var socket = io()

const sendForm = document.getElementById("send-form")
const chat = document.getElementById("chat-container")

const displayMessage = (messages) => {
    messages.forEach((message) => {
        if (message.isSentByYou && message.text !== "") {
            const msg = document.createElement("div")
            msg.innerHTML = `<div class="your-message message m-2">${message.text}<h5></h5></div>`
            chat.appendChild(msg)
        } else if (message.text !== "") {
            const msg = document.createElement("div")
            msg.innerHTML = `<div class="their-message message m-2">${message.text}<h5></h5></div>`
            chat.appendChild(msg)
        }
    })
   
}

socket.on("receive-message", message => {
    console.log("Received Message! " + message)
    displayMessage([message])
})

sendForm.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("sent message!")
    socket.emit("send-message", { text: sendForm.elements["send"].value, isSentByYou: false })
    displayMessage([{ text: sendForm.elements["send"].value, isSentByYou: true }])
    sendForm.elements["send"].value = ""
})