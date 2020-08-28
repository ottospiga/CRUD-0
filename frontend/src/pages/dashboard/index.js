import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import { BsFillTrashFill, BsList  } from "react-icons/bs";
import axios from 'axios';

function Dashboard() {  

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  buscarCandidato(data) {
    axios.get('http://localhost/dashboard')
    .then(()=>{
    console.log(data)
  })

  

  return (
    <> 
      <Container 
       style={{ margin:30 }}
       >
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Cadastro de Candidato</Card.Header>
              <Card.Body>

                <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name="senha" type="name" placeholder="Nome" ref={register} />
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
                    <Form.Check inline label="C#" type="checkbox" placeholder="c#" name="c#" ref={register}/>
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
                    Registrar Candidato
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card>
              <Card.Header as="h5">Tabela de Candidatos</Card.Header>
                <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Idade</th>
                      <th>Linkdin</th>
                      <th>Tecnologias</th>
                      <th>Editar</th>
                      <th>Apagar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>#</th>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button variant="primary" type="submit">
                          <BsList/>
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" type="submit">
                          <BsFillTrashFill/>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th>#</th>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Otto</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </Table>
                </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      
      {/* {errors.exampleRequired && <span>This field is required</span>} */}       

    </>
  );
}

export default Dashboard;