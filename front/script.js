// Conecta ao Socket.IO no servidor
const socket = io('http://localhost:3000');

const username_local = localStorage.getItem('username')
const username_init = document.getElementById('username')
if( username_local) {
    username_init.value = username_local
}



async function atualizarMensagens () {
    const response = await fetch('http://localhost:3000/api/mensagens')
    const data = await response.json()

    const messages = document.getElementById('messages')

    data.mensagens.forEach(mensagem => {
        criar_mensagem(mensagem)
    });
}

atualizarMensagens()

function criar_mensagem(mensagem) {
    const li = document.createElement('li');
    const username = document.getElementById('username').value

    const div = document.createElement('div')

    const span1 = document.createElement('span')
    span1.classList = 'user-msg'
    span1.textContent = mensagem.username

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

    li.classList = 'msg'

    if (username == mensagem.username) {
        li.className = 'msg myMsg'
    }

    messages.appendChild(li);
}



socket.on('novaMensagem', (mensagem) => {
    criar_mensagem(mensagem)
})


function sendMessage() {
    const input = document.getElementById('messageInput');
    let username = document.getElementById('username').value
    localStorage.setItem('username', username)

    if (input.value.length === 0 || username.length === 0) {
        alert('Campo vazio')
    } else{
        const time = new Date()

        const mensagem = {
            username,
            msg:  input.value,
            time
        }
    
        socket.emit('novaMensagem', mensagem) // Envia mensagem via Socket.IO
        input.value = '';
    }
}