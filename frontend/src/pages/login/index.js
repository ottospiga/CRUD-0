import React from 'react';
// import { oi } from './styles';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Login() {  

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <> 
      <Container style={{ margin:30, width: '25rem' }} >
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Login</Card.Header>
              <Card.Body>

                <Form onSubmit={handleSubmit(onSubmit)}>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" ref={register} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="senha" type="password" placeholder="Password" ref={register} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Entrar
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          
          </Col>

        </Row>
      </Container>
      
      {/* {errors.exampleRequired && <span>This field is required</span>} */}       

    </>
  );
}

export default Login;