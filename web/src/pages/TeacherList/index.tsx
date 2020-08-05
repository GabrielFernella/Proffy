import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import './styles.css'
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
   return (
      <div id="page-teacher-list" className="container">
         <PageHeader title="Estes são os Proffys disponíveis">

            <form id="search-teachers">

               <Select name ="subject" label="Matéria" 
                  options={[ 
                     { value: 'Node', label: 'Node' },
                     { value: 'Java', label: 'Java' },
                     { value: 'SQL', label: 'SQL' },
                     { value: 'React', label: 'React' },
                     { value: 'HTML', label: 'HTML' }
                  ]}
               />
               <Select name ="week-day" label="Dia da semana" 
                  options={[ 
                     { value: '0', label: 'Domingo' },
                     { value: '1', label: 'Segunda' },
                     { value: '2', label: 'Terça' },
                     { value: '3', label: 'Quarta' },
                     { value: '4', label: 'Quinta' },
                     { value: '5', label: 'Sexta' },
                     { value: '6', label: 'Sábado' },
                     
                  ]}
               />
               <Input name ="time" type="time" label="Hora"  />

            </form>
         </PageHeader>

         <main>
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
         </main>

      </div>
   )
}

export default TeacherList;