const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const consultationsRoute = require('./routes/ConsultationsRoute'); // Importando a rota de consultas

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

// Usar a rota de consultas
app.use('/api', consultationsRoute); // Adicionando a rota de consultas

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
