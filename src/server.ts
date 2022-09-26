import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

// .ENV
dotenv.config();

//server
const server = express();

// Template Engine
server.set('view engine', 'mustache');

// Setamos a Template Engine
server.engine('mustache', mustache());

// Caminho das Views
server.set('views', path.join(__dirname, 'views'));

// Pasta pública Static
server.use(express.static(path.join(__dirname, '../public')));

// Rotas.
server.use(mainRoutes);

// Rota de alerta se nenhuma página for encontrada
server.use((req, res) => {
    res.send('Página não encontrada');
});

// Servidor
server.listen(process.env.PORT);

