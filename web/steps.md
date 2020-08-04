
# Passos de construção da nossa aplicação Proffy WEB

## Pacotes utilizados 
1. yarn create react-app web --template typescript (Instalar os pacotes typescript para o desenvolvimento react)
2. yarn add react-router-dom (Para fazer navegação de rotas nas suas aplicações react)
3. yarn add @types/react-router-dom -D (Alguns pacotes não são identificados automaticamente e por tanto devemos instalar eles como dependência de desenvolvimento)

## Passos de criação
   1. Criar projeto na pasta desejada e limpar os arquivos que não serão utilizados na nossa aplicação
   src -> /assets , /page , App.tsx, index.tsx react-app-env.ts
   public -> index.html

   2. Edite as configurações globais de css da sua aplicação e forme o template da mesma

   3. Elabore suas páginas e respectivamente seu CSS
   
   4. Faça suas configurações de rotas e instale os pacotes

   5. Adicione as tags de links as suas páginas usando o Link do react-router-dom  
   6. 



## Anotações adicionais 

   ### Processos de criação de páginas
      para manter a organização das suas páginas e códigos, é recomendável que você crie uma pasta para cada página, assim, vc deixa os arquivos de 
      index.tsx e style.css no mesmo arquivo, dedicando as alterações apenas para sua página.

   ### Arquivo de Configuração GLOBAL
      Este arquivo é responsável por padronizar características do seu projeto, incluindo o reset das margens e padding que veem por padrão no html.

   ### Components em react
      O react trabalha em componentes, isso dinamiza mais a forma de trabalho reutilizando códigos que podem ser alterados quando vc insere as tags que reutiliza em 
      sua aplicação. Para utilizar esses esses componentes, vc deverá criar uma pasta dedicada a esses componentes e separá-los em pastas, como os arquivos de página,
      vamos a um exemplo:

      ```js
         import React from 'react';

         import { Link } from 'react-router-dom';

         interface PageHeaderProps {
            /*Propriedades dos componentes, precisa ser um functionalComponent*/
            title: string;
         }
         const PageHeader: React.FC<PageHeaderProps> = (props) => {
            return (
               <header className="page-header">

                     <div className="top-bar-container">
                        <Link to="/">
                           <img src={backIcon} alt="Voltar"/>
                        </Link>
                        <img src={logoImg} alt="Logo Proffy"/>
                     </div>

                     <div className="header-content">
                        <strong>{props.title}</strong>
                     </div>
                  </header>
            );
         }

         export default PageHeader;
      ```
      Quando for utilizar o componente, importe e insira a tag:
      
      ```js
            import React from 'react';

            import PageHeader from '../../components/PageHeader';

            import './styles.css'

            function TeacherList() {
               return (
                  <div id="page-teacher-list" className="container">
                     <PageHeader title="Estes são os Proffys disponíveis">

                        Teste
                     </PageHeader>
                  </div>
               )
            }

            export default TeacherList;
      ```

   ### props.children
      O props.children serve para vc aplicar informações aos componentes sem necessáriamente criar uma propriedade, ou seja, vc pode adicionar recursos apenas a aquela página e por sua vez não afetará outras páginas que utilizam o mesmo componente.
      Tudo que estiver dentro da tag que está utilizando vai pertencer ao children, veja o exemplo:
      ```js
         <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">

               Teste children
            </PageHeader>
         </div>
      ```