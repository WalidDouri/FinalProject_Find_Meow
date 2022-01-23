import { Avatar, Button, Comment, Form, Input, List, Tooltip } from 'antd';

import React from 'react';
import axios from 'axios';
import moment from 'moment';

const { TextArea } = Input;

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Luna',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        I am sorry to hear. We should plan a search party!
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Leo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        Isnt this like the 10th time you lost your cat? #YouShouldntOwnaCatIfYouCantBeResponsible #SorryNotSorry!
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'MyNameisJEFF',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        I like pizzzza
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(3, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(5, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

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

const CommentSection = () => {
  const [comments, setComments] = React.useState(data);
  const [submitting, setSubmitting] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [refreshComments, setRefreshComments] = React.useState(false)

  React.useEffect(() => {
    // const url = `http://localhost:3001/comments`
    if (refreshComments) {
      // Fetch the comments and set the comments into the components state
      // axios.get(`http://localhost:3001/:id/comments`),
      axios.get(`http://localhost:3001/comments`)
      .then(response => {
        setComments(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      setComments(true)
      setRefreshComments(false);
    }
  }, [refreshComments])

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setComments([
        ...comments,
        {
          // Change to pull info from DB username/ we dont have a avatar column
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ])
      setValue('');
    }, 1000);


    const url = "http://localhost:3001/comments"
    const payload = {
      comment: value,
      date_created: '2025,01,01',
      cat_form_id: 1,
      user_id: 1,
    }
    console.log('Received values of form: ', payload);
    axios.post(url, payload)
      .then(res => {
        console.log(res.data)
        setRefreshComments(true)
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        setSubmitting(false);
      })
  }

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <Editor
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          value={value}

          />
        }
      />
    </>
  );


}


export default CommentSection;