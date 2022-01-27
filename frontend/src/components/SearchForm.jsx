import React, { useState } from 'react';
import axios from 'axios';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import '../Pages/SearchPet.scss'

export default function SearchForm ({onApples}) {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
 


  const { Option } = Select;

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];

    // for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} >
          {/* key={i} */}

          <Form.Item
            name= "status"
            label='Status'
            className='test'
          >
            <Select style={{ width: 400, fontSize: 20 ,textAlign: 'center' }}allowClear name= "status">
                <Option value="lost">Lost</Option>
                <Option value="found">Found/Stray</Option>
            </Select>
           
          </Form.Item>

          <Form.Item
            name="last_seen_city"
            label="City"
            className='test'
          >
            <Input placeholder="City" name="last_seen_city" style={{ width: 400, fontSize: 20 ,textAlign: 'center' }} />
          </Form.Item>

          <Form.Item
            name="last_seen_postal_code"
            label="Postal Code:"
            className='test'
          >
            <Input placeholder="Postal Code" name="last_seen_postal_code"style={{ width: 150, fontSize: 20 }}  />
          </Form.Item>
    
  
        </Col>,
      );

    // }

    return children;
  };
  
  const onFinish = (values) => {
    // setPure(values);

    console.log('Received values of form: ', values);

    return axios.get(`http://localhost:3001/api/search?last_seen_city=${values.last_seen_city}&status=${values.status}&last_seen_postal_code=${values.last_seen_postal_code}`)
        .then(res => onApples(res.data))
        .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
        });
        
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'center',
          }}
        >
          <Button type="primary" htmlType="submit" >
            Search
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Advanced Options
          </a>
        </Col>
      </Row>
    </Form>
  );
};

