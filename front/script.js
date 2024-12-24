// Conecta ao Socket.IO no servidor
const socket = io('http://localhost:3000');


async function atualizarMensagens () {
    const response = await fetch('http://localhost:3000/api/mensagens')
    const data = await response.json()

    const messages = document.getElementById('messages')

    data.mensagens.forEach(mensagem => {
        criar_mensagem(mensagem)
    });
}

function criar_mensagem(mensagem) {
    const li = document.createElement('li');

        const div = document.createElement('div')

        const span1 = document.createElement('span')
        span1.classList = 'user-msg'
        span1.textContent = mensagem.user_ID

        const span2 = document.createElement('span')
        span2.classList = 'horario-msg'
        span2.textContent = mensagem.horario

        div.appendChild(span1)
        div.classList = 'header-msg'
      
        const p = document.createElement('p')
        p.textContent = mensagem.msg;
        p.appendChild(span2)

        li.appendChild(div)
        li.appendChild(p)

        li.className = 'msg'
        messages.appendChild(li);
}

atualizarMensagens()

socket.on('novaMensagem', (mensagem) => {
    criar_mensagem(mensagem)
})


function sendMessage() {
    const input = document.getElementById('messageInput');

    if (input.value.length === 0) {
        alert('Campo vazio')
    } else{
        const time = new Date()

        const mensagem = {
            msg:  input.value,
            time
        }
    
        socket.emit('novaMensagem', mensagem) // Envia mensagem via Socket.IO
        input.value = '';
    }
}