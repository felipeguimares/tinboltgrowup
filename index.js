const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/gemini/conteudo/:content_id', async (req, res) => {
  const contentId = req.params.content_id;

  try {
    const response = await axios.get(`http://localhost:8080/api/gemini/conteudo/${contentId}`);
    res.json({ content: response.data });
  } catch (error) {
    console.error('Erro ao obter conteúdo da API Gemini:', error);
    res.status(500).send('Erro ao obter conteúdo');
  }
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
