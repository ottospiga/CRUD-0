import React from 'react';
import { Container } from './styles';

import { Form, Input, Button, Space, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function Login() {  

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Container> 
      <Space direction="horizontal">
      
        <Card title="Novo Candidato" style={{ width: 450 }}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
            <Form.Item
              name="E-mail"
              rules={[
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Relatorio candidatos" style={{ width: 450 }}></Card>

      </Space>

    </Container>
  );
}

export default Login;