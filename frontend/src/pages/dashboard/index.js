import React, { useEffect, useState } from 'react';
import { Container, Row, Nav, Card, Form, Button, Table, CardDeck, Navbar } from 'react-bootstrap';
import { BsFillTrashFill, BsList, BsPersonCheckFill, BsPersonDash  } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from 'axios';

function Dashboard() {  

  const [data, setData] = useState([]);
  const { register, handleSubmit, reset } = useForm({});
  
  const onUpdate = (user, id) => {
    axios.delete('http://localhost/api/'+id)
    reset({
        name: user.name,
        email: user.email,
        idade: user.idade,
        link: user.link,
        c: user.c,
        js: user.js,
        node: user.node,
        php: user.php,
        msg: user.msg,
        ionic: user.ionic,
        angular: user.angular,
        react: user.react,
        laravel: user.laravel
    })
  }

  const onPost = (data, e) => {
    axios.post('http://localhost/api', {
      name:data.name,
      email:data.email,
      idade:data.idade,
      link:data.link,
      c:data.c,
      js:data.js,
      node:data.node,
      php:data.php,
      msg:data.msg,
      ionic:data.ionic,
      angular:data.angular,
      react:data.react,
      laravel:data.laravel
   })
   .then(function (response, data) {
     console.log(data);
     console.log(response);
     e.target.reset();
     window.location.reload();
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  const deletarDado = (id) => {
    axios.delete('http://localhost/api/'+id)
    .then(res => setData(res.data))
  }

  const onDelete = (id) => {
    deletarDado(id)
    window.location.reload()
  }

  useEffect(() => {
    axios.get('http://localhost/api')
    .then(res => setData(res.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.idade}</td>
          <td>{user.link}</td>
          <td>{user.c ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.js ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.node ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.php ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.msg ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.ionic ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.angular ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.react ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>{user.laravel ? <BsPersonCheckFill/> : <BsPersonDash/>}</td>
          <td>
            <Button variant="primary" 
              onClick={() => onUpdate(user, user._id)}
            >
              <BsList/>
            </Button>
          </td>
          <td>
            <Button variant="primary" 
              onClick={() => onDelete(user._id)}
               >
              <BsFillTrashFill/>
            </Button>
          </td>
        </tr>
      )
    })
  }

  return (
    <> 
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <Button variant="outline-primary" type="submit">Sair</Button>
      </Form>
    </Navbar>

      <Container style={{ margin:30 }} >
        <Row>
          
          <CardDeck>
              <Card>
                <Card.Header as="h5">Cadastro de Candidato</Card.Header>
                <Card.Body>

                  <Form onSubmit={handleSubmit(onPost)}>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control name="name" type="name" placeholder="Nome" ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control name="email" type="email" placeholder="Enter email" ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Idade</Form.Label>
                      <Form.Control name="idade" placeholder="Idade" ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>URL Linkdin</Form.Label>
                      <Form.Control name="link" placeholder="Linkdin" ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check inline label="C#" type="checkbox" placeholder="c" name="c" ref={register}/>
                      <Form.Check inline label="JS" type="checkbox" placeholder="js" name="js" ref={register}/> 
                      <Form.Check inline label="NodeJs" type="checkbox"  placeholder="node" name="node" ref={register}/> 
                      <Form.Check inline label="PHP" type="checkbox" placeholder="php" name="php" ref={register} /> 
                      <Form.Check inline label="Mensageria" type="checkbox" placeholder="msg" name="msg" ref={register} /> 
                      <Form.Check inline label="Ionic" type="checkbox" placeholder="ionic" name="ionic" ref={register} /> 
                      <Form.Check inline label="Angular" type="checkbox"  placeholder="angular" name="angular" ref={register}/> 
                      <Form.Check inline label="React" type="checkbox" placeholder="react" name="react" ref={register} /> 
                      <Form.Check inline label="Laravel" type="checkbox"  placeholder="laravel" name="laravel" ref={register}/> 
                    </Form.Group>
                    
                      <Button variant="primary" type="submit">
                        Salvar Candidato
                      </Button>
                  </Form>
                </Card.Body>
              </Card>
            
              <Card>
                <Card.Header as="h5">Tabela de Candidatos</Card.Header>
                  <Card.Body>
                  <Table responsive bordered hover>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Linkdin</th>
                        <th>C#</th>
                        <th>JS</th>
                        <th>Node</th>
                        <th>php</th>
                        <th>msg</th>
                        <th>Ionic</th>
                        <th>Angular</th>
                        <th>React</th>
                        <th>Laravel</th>
                        <th>Editar</th>
                        <th>Apagar</th>
                      </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                  </Table>
                  </Card.Body>
              </Card>
            </CardDeck>

        </Row>
      </Container>
      
    </>
  );
}

export default Dashboard;