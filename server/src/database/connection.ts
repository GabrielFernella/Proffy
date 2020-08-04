//Configurações do banco de dados
import knex from 'knex'; //query builder
import path from 'path'; //para lidar melhor com caminhos no node

const db = knex({
   client: 'sqlite3',
   connection:{
      filename: path.resolve(__dirname, 'database.sqlite')
   },
   useNullAsDefault: true, //informação exclusiva para o sqlite, para vc usar null nos valores não preenchidos
})

export default db;