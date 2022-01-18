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

const Test = () => {
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
<<<<<<< HEAD
<section className="vh-100 bg-image signup" >
  {/* <div className="mask d-flex align-items-center h-100 gradient-custom-3"> */}
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1cg">First Name</label>
                  <input
                    type="text"
                    // id="form3Example1cg"
                    className="form-control form-control-lg"
                    onChange={onChange}
                    placeholder='First name'
                    name='first_name'
                    value={first_name}
                    required
                  />
                </div>
=======
    
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
>>>>>>> master

  
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
        <Input />
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
        <Input.Password />
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
        <Input.Password />
      </Form.Item>
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Test;