import React from 'react';
import { Container } from './styles';

import { Form, Input, InputNumber, Button, Space, Card } from 'antd';
import 'antd/dist/antd.css';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


function Registar() {
  
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Container>

      <Space direction="vertical">
      
      <Card title="Registar" style={{ width: 450 }}>
       
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'name']}
        label="Senha"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['passwordConfirmation', 'passwordConfirmation']}
        label="Confirmação de senha"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>

      </Card>
    </Space>
    </Container>
  );
}

export default Registar;