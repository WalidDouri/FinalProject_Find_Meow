import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const url = "http://localhost:3001/api/signup"
    const  newUser = {
      ...values
      }
    
    console.log('Received values of form: ', newUser);
    axios.post(url, newUser) 
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {console.log(err)})

  };

  return (
    
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      // initialValues={{
      //   residence: ['zhejiang', 'hangzhou', 'xihu'],
      //   prefix: '86',
      // }}
      scrollToFirstError
    >

      <Form.Item
        name="first_name"
        label="First Name"
        
        rules={[
          {
            required: true,
            message: 'Please input your first name'
          },
        ]}
      >
        <Input style={{ width: '50%' }} placeholder="First Name" />
      </Form.Item>

      <Form.Item
        name="last_name"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your Last name'
          },
        ]}
      >
        <Input style={{ width: '50%' }} placeholder="Last Name"/>
      </Form.Item>

  
      {/* <Row gutter={2}>  */}
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your Username'
          },
        ]}
      >
        <Input style={{ width: '50%' }} placeholder="Username"/>
      </Form.Item>

      <Form.Item
        name="phone_number"
        label="Phone number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '50%' }} placeholder="Phone number" />
      </Form.Item>
      
      {/* </Row> */}

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input style={{ width: '50%' }}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password style={{ width: '50%' }}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password style={{ width: '50%' }}/>
      </Form.Item>
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;