import http from 'node:http';
import { Server } from 'socket.io';
import app, {mensagens} from './app';

// Criação do servidor HTTP (socket precisa usar http do node)
const server = http.createServer(app);

// Configuração do Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET']
  }
});

// Evento ao conectar
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  // Evento personalizado para mensagens
    socket.on('novaMensagem', (mensagem: {
        msg: string,
        time: Date
    }) => {

    mensagem.time = new Date(mensagem.time)

    // Extrair horas e minutos
    const horas = mensagem.time.getHours().toString().padStart(2, '0'); // Formata para 2 dígitos
    const minutos = mensagem.time.getMinutes().toString().padStart(2, '0');
    // Combina no formato HH:MM
    const horario = `${horas}:${minutos}`;

    const nova_mensagem = {
        msg: mensagem.msg,
        user_ID: socket.id,
        horario,
        date: mensagem.time
    }
    console.log('Nova mensagem:', mensagem);
    mensagens.push(nova_mensagem)
    io.emit('novaMensagem', nova_mensagem); // Reenvia para todos os clientes
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

// Inicializa o servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
