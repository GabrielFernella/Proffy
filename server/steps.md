
# Passos de construção da nossa aplicação Proffy SERVER

## Pacotes utilizados 
   1. yarn init -y (instalar package.json )
   2. yarn add typescript -D 
   3. yarn tsc --init (Arquivo de configurações do typescript)
   4. yarn add ts-node-dev -D (observa cao o código seja alterado, como se fosse o nodemon)
   5. yarn add express & yarn add @types/express -D (quando não achar o pacote, instale o mesmo conforme o vscode pedir)
   6. yarn add knex sqlite3 (query builder e banco de dados lite)
   7. yarn add cors & yarn add @types/cors -D (permite conexões diferentes entre serviços, font-end e back-end)
   

## Passos de criação
   1. instale as dependências e faça as alterações
   2. Monte a estrutura da aplicação
   3. crie o script para rodar o servidor
   4. terminar configurações de conexão
   5. montar as configurações do banco
   6. montar suas migrations e montar os scripts personalizados e as config do kenxfile
   7. rodar migration
   8. montar Controllers tendo já feito um esboço das funcionalidades
   


## Anotações adicionais 


# Funcionalidades 
   - Conexões = rota para listar o total de conexões realizadas
   - Rota para criar uma nova conexão
   - Rota para listar aulas = filtrar por matéria, dia da semana e horário