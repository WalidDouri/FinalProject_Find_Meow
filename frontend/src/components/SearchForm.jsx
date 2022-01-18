import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';




export default function SearchForm () {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const [catForm, setCatForm] = useState(null);
  const [pure, setPure] = useState({});

    // useEffect(() => {
    //         axios.get(`http://localhost:3001/api/search?last_seen_city=${pure.last_seen_city}&status=${pure.status}&last_seen_postal_code=${pure.last_seen_postal_code}`)
    //         .then(res => setCatForm(res.data.total))
    //         .catch(error => {
    //           this.setState({ errorMessage: error.toString() });
    //           console.error('There was an error!', error);
    //       });
    // }, []);

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
          >
            <Select defaultValue="" style={{ width: 120 }}allowClear name= "status">
                <Option value="lost">Lost</Option>
                <Option value="found">Found/Stray</Option>
            </Select>
           
          </Form.Item>

          <Form.Item
            name="last_seen_city"
            label="City"
          >
            <Input placeholder="City" name="last_seen_city" />
          </Form.Item>

          <Form.Item
            name="last_seen_postal_code"
            label="Postal Code"
          >
            <Input placeholder="Postal Code" name="last_seen_postal_code" />
          </Form.Item>
        
        </Col>,
      );
    // }

    return children;
  };

  const onFinish = (values) => {
    setPure(values);

    console.log('Received values of form: ', values);

    return axios.get(`http://localhost:3001/api/search?last_seen_city=${pure.last_seen_city}&status=${pure.status}&last_seen_postal_code=${pure.last_seen_postal_code}`)
        .then(res => setCatForm(res.data.total))
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
            textAlign: 'right',
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

// export default SearchForm(
//   <div>
//     <SearchForm />
//     <div className="search-result-list">Search Result List</div>
//   </div>
// );