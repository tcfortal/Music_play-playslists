import React from 'react';
import './App.css';
import {Accordion, eventKey} from 'react-bootstrap';


const Faq = () => {
    return (       
        <header>


      <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-left">
                    <div className="m-4 m-lg-5">
                    <Accordion>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Quando acontecerá o lançamento do novo serviço?</Accordion.Header>
    <Accordion.Body>
    O lançamento oficial ocorrerá em 19/08/2021
    </Accordion.Body>
  </Accordion.Item>


   <Accordion.Item eventKey="2">
   <Accordion.Header>Quanto o serviço custará?</Accordion.Header>
    <Accordion.Body >
    Teremos três planos feitos para diferentes perfis de usuários, 
    que serão divulgados no dia do lançamento :D
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3" >
   <Accordion.Header>Aplicação será Cross Platform?</Accordion.Header>
    <Accordion.Body>
    Estamos preparando uma promoção de lançamento especial 
    para os que se cadastrarem em nossa plataforma
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="4">
   <Accordion.Header>Receberei benefícios se cadastrar o meu e-mail?</Accordion.Header>
    <Accordion.Body>
    Teremos versões web e mobile (iOS e Android) de nossa plataforma :))
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="5">
   <Accordion.Header>Receberei notificações?</Accordion.Header>
    <Accordion.Body>
    enviaremos notificações sobre atualizações e novidades :))
    </Accordion.Body>
  </Accordion.Item>


  </Accordion>
  

  </div>
 </div>
 </div>
 

</header>


   
    );
}

export default Faq;

