const button = document.getElementById('enviarDados')

function enviarReq(){
    let input = document.getElementById("user-input");

    const DATA = {
        "pergunta": `${input.value}`
    }

    const HEADER = {
        'Content-Type': 'application/json'
    }

    return axios.post('http://localhost:3000/chatBot', DATA, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: false
    })

    .then(response => {
        sendMessage(input.value, response.data.resposta)
    })
    .catch(error =>{
        console.error('Erro ao fazer a requisição', error)
    })
}

button.addEventListener('click', enviarReq)

let history = [];
        
        function sendMessage(pergunta, resposta) {
            
            let message = pergunta.trim();
            if (message === "") return;
            
            let chatBox = document.getElementById("chat-box");
            let userMessage = document.createElement("p");
            userMessage.textContent = "Você: " + message;
            chatBox.appendChild(userMessage);
            
            let responseMessage = document.createElement("p");
            responseMessage.textContent = "Resposta: " + resposta;
            chatBox.appendChild(responseMessage);

            history.push(message);
            
            pergunta = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        
        function viewHistory() {
            alert("Histórico de perguntas:\n" + history.join("\n"));
        }


