# Chat em Tempo Real com Fastify, TypeScript e Socket.IO

Este projeto implementa um **chat em tempo real** usando **Express**, **TypeScript** e **Socket.IO**. O backend oferece uma **API REST** para recuperar mensagens iniciais e permite comunicação em tempo real através de WebSockets. O frontend está sendo feito com **HTML**, **CSS** e **JavaScript**, em vez de **React**, para não perder a prática com o básico.
Este é um projeto pessoal criado com o objetivo de testar e aprimorar os conhecimentos sobre Socket.IO e como integrar comunicação em tempo real com o backend. Ele não tem um propósito comercial, mas serve como uma ótima oportunidade para experimentar novas tecnologias e melhorar as habilidades em desenvolvimento web.

## Funcionalidades

- **API REST**: Endpoint para buscar mensagens anteriores.
- **Socket.IO**: Comunicação em tempo real entre clientes.
- **TypeScript**: Tipagem estática para maior segurança e robustez.
- **Express**: Framework web rápido e eficiente para a API.
- **Node.js**: Ambiente de execução para o backend.
- **CORS**: Middleware para permitir requisições de origens diferentes.
- **HTML, CSS e JavaScript**: Frontend básico para comunicação com a API e WebSocket.

## Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)

## Instalação

### clone o repositório

```bash
git clone https://github.com/devmarcosantonio/ChatSocket.git
cd ChatSocket
```

### Navegue até a pasta back
```bash
cd back
```
### Instale todas as depedências e rode a aplicação
```bash
npm install
npm run dev
```

### Sobre o frontend
Como é um arquivo simples, basta abrir o arquivo index.html com navegador de sua preferência (já com servidor rodando)!

## Conclusão

Este projeto oferece uma implementação simples de um chat em tempo real utilizando Fastify, TypeScript e Socket.IO no backend, e HTML, CSS e JavaScript no frontend. Ele demonstra como integrar uma API REST para recuperar dados e como estabelecer uma comunicação eficiente entre os clientes e o servidor utilizando WebSockets.
A escolha do frontend básico foi uma oportunidade de reforçar o conhecimento em HTML, CSS e JavaScript, mantendo o foco nas tecnologias fundamentais antes de avançar para frameworks como React.
