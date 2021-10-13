  import { useState } from 'react';
  import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
  import users from './users_mock';


  function UserSignup(){
  const [email , setEmail] = useState('');
  const [emailConf , setEmailConf] = useState('');
  const [password , setPassword] = useState('');
  const [nome , setNome] = useState('');
  const [sexo, setSexo] = useState('M');
  const [erro, setErro] = useState({email:  ''});




  function handleSubmit(e){
      e.preventDefault();

      if(email !== emailConf){
          setErro( {email: 'os emails estão diferentes!' })
      }else{
          setErro( {email: '' })  
  }
    users.push({
        email,
        password,
        nome,
        sexo


      })

    console.log(users);
    limpar();

      }

  function limpar(){
  setEmail('');
  setEmailConf('');
  setPassword('');
  setNome('');
  setSexo('M');
  setErro({email:''});

  }


  return(
      <>
          
          {erro.email && (<div class="alert alert-success">  
              {erro.email}

          </div>)}


    <div className="container  py-5">
        <Form onSubmit={(e)=> handleSubmit(e)}> 
          
          
                      
          <div className="px-lg-5">
            <Label className=" " for="email"><p>Email</p></Label>
            <Input className="mb-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Digite seu Email" />
          </div>

          <div className="px-lg-5">
            <Label for="emailConf"><p>Confimação de Email</p></Label>
            <Input className="mb-4" type="email" value={emailConf} onChange={(e) => setEmailConf(e.target.value)} name="email" id="emailConf" placeholder="Confirme seu Email" />
          </div>

          <div className="px-lg-5">
            <Label for="password"><p>Password</p></Label>
            <Input className="mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="email" id="password" placeholder="Digite sua senha" />
          </div>

          <div className="px-lg-5">
            <Label for="cadastroNome"><p>Nome</p></Label>
            <Input className="mb-4"type="text" value={nome} onChange={(e) => setNome(e.target.value)}name="nome" id="nome" placeholder="digite seu nome" />
          </div>

          <div className="px-lg-5 mt-4">
          <div className="form-check">
          <Input className= " Form-check-input" checked={sexo ==='M'} value="M" onChange={(e) => setSexo(e.target.value)}type="radio" name="sexo"  id="sexo" /> 
          <Label className= "Form-check-input" for="sexo" >
            Masculino
            </Label>
            </div>


            <div className="form-check">
            <Input className= "Form-check-input" checked={sexo ==='F'} value="F" onChange={(e) => setSexo(e.target.value)}type="radio" name="sexo"  id="sexo" /> 
            <Label className= "Form-check-input" for="sexo" >
            Feminino
            </Label>

            </div>
                <button type="submit" className="mt-4 btn btn-primary">Cadastrar</button>
            </div>
        </Form>
        
        
        </div>
    </>
        
    )


  }
  export default UserSignup;