import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
   return (
      <article className="teacher-item">
               <header>
                  <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego"/>
                  <div>
                     <strong>Diego Fernandes</strong>
                     <span>Javascript</span>
                  </div>
               </header>
               <p>
                  Entusiasta em programação e apaixonado por aprender tecnologias novas
                  <br/> <br/>
                  CTO at @Rocketseat. Passionate about education and changing people's lives through programming.
               </p>
               <footer>
                  <p>
                     Preço/hora 
                     <strong> R$ 20,00</strong>
                     </p>
                     <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                     </button>
                  
               </footer>

            </article>
   );
}

export default TeacherItem;