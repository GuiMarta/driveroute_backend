import { createConnection } from 'mysql2/promise';

export const connection = createConnection({
  //host: 'mysql.infocimol.com.br',
  host: '44.227.217.144',
  user: 'infocimol21',
  database: 'infocimol21',
  port: '3306',
})


  .then(() => {
    console.log('Conexão estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  });