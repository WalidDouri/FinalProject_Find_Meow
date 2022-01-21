import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import axios from 'axios';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value, onFinish }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} showCount maxLength={130} style={{ width: '50%' }} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class CommentBox extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            // Change to pull info from DB username/ we dont have a avatar column
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  
  onFinish = (value) => {
    const url = "http://localhost:3001/comments"
    const payload = {
      ...value,
      date_created: '2025,01,01',
      cat_form_id: 1,
      user_id: 1,
    }
    console.log('Received values of form: ', payload);
    axios.post(url, payload)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => { console.log(err) })

  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
            onFinish={this.onFinish}

            />
          }
        />
      </>
    );
  }
}

export default CommentBox; 