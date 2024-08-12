
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados(x)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Senha padrão do XAMPP é vazia
  database: 'catalogo_produtos'
});

// Conectar ao banco de dados(x)
connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados: ' + error.stack);
    return;
  }
  console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});

// Endpoint para adicionar um produto(POST)(x)
app.post('/produtos', (req, res) => {
  const { descricao,nome,preco } = req.body;
  const sql = 'INSERT INTO produtos (descricao,nome,preco) VALUES (?, ?, ?)';
  connection.query(sql, [descricao,nome,preco], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao adicionar produto.');
      return;
    }
    res.status(201).send('O Produto foi adicionado com sucesso.');
  });
});

// Endpoint para obter todos os produtos (GET)(x)
app.get('/produtos', (req, res) => {
  connection.query('SELECT * FROM produtos', (error, results) => {
    if (error) {
      res.status(500).send('Erro ao obter produtos.');
      return;
    }
    res.json(results);
  });
});

// Endpoint para obter um produto por ID (GET)(x)
app.get('/produtos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM produtos WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao obter produtos.');
      return;
    }
    res.json(results[0]);
  });
});

// Endpoint para atualizar um produtos (PUT)
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, nome, preco } = req.body;
  const sql = 'UPDATE produtos SET nome = ?, preco = ?, descricao = ? WHERE id = ?';
  connection.query(sql, [descricao, nome, preco], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao atualizar produtos');
      return;
    }
    res.send('Produto atualizado com sucesso.');
  });
});

// Endpoint para deletar um Produtos (DELETE)
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM produtos WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao deletar produtos.');
      return;
    }
    res.send('Produtos deletado com sucesso.');
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Funcao de Callback para a insercao de Produto

function adicionarProdutosLocalCallback(error,result,res){
  if (error) {
    res.status(500).sen('Erro ao adicionar Produtos.');
    return;
  }
  res.status(201).send('Produtos adicionado com sucesso.');
}

//Funcao para a rota POST
function adicionarProdutos(req,res) {
  
}
