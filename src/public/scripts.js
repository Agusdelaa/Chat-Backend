// const Swal = require("sweetalert2")

const socket = io()

document.getElementById("chat-form").addEventListener("submit", (e) => {
    e.preventDefault()

    const messageInput = document.getElementById("message")
    const message = messageInput.value
    messageInput.value = ""

    socket.emit("chatMessage", message)
})

socket.on("message", (data) =>{
    const chatMessages = document.getElementById("chat-messages")
    const messageElement = document.createElement("div")
    messageElement.innerHTML = `<strong>${data.username} :</strong> ${data.message}`
    chatMessages.appendChild(messageElement)
})

document.getElementById("username-form").addEventListener("submit", (e) =>{
    e.preventDefault()
    const usernameInput = document.getElementById("username")
    const username = usernameInput.value

    socket.emit("newUser", username)

    Swal.fire({
        icon : "sucess",
        title: "Bienvenido al chat",
        text : `Estas conectado como ${username}`
    })

    document.getElementById("username-form").style.display = "none"
    document.getElementById("chat-form").style.display = "block"
})



// Crea un nuevo elemento párrafo, y lo agrega al final del cuerpo del documento
// var p = document.createElement("p");
// document.body.appendChild(p);

//Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.