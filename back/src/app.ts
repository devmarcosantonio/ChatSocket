import express, { Application} from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

interface Mensagem {
    msg: string,
    horario: string,
    user_ID: string
}

export const mensagens: Mensagem[] = [];

// Rota de API REST
app.get('/api/mensagens', (req, res) => {
    res.json({ mensagens });
});

export default app;