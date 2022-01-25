import { Avatar, Button, Comment, Form, Input, List, Tooltip } from 'antd';

import React, { useContext } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom'
import { authContext } from '../providers/Authprovider'

const { TextArea } = Input;

// const data = [
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: {username},
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     content: {comment},

//     datetime: (
//       <Tooltip title={moment(date_created).format('YYYY-MM-DD HH:mm:ss')}>
//         <span>{moment(date_created).fromNow()}</span>
//       </Tooltip>
//     ),
//   },
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: {username},
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     content: (
//       <p>
//         Isnt this like the 10th time you lost your cat? #YouShouldntOwnaCatIfYouCantBeResponsible #SorryNotSorry!
//       </p>
//     ),
//     datetime: (
//       <Tooltip title={moment()..format('YYYY-MM-DD HH:mm:ss')}>
//         <span>{moment().fromNow()}</span>
//       </Tooltip>
//     ),
//   },
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: 'MyNameisJEFF',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     content: (
//       <p>
//         I like pizzzza
//       </p>
//     ),
//     datetime: (
//       <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
//         <span>{moment().fromNow()}</span>
//       </Tooltip>
//     ),
//   },
// ];

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
      <TextArea rows={4} onChange={onChange} value={value} showCount maxLength={130} style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CommentSection = () => {
  const [comments, setComments] = React.useState([]);
  const [submitting, setSubmitting] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [refreshComments, setRefreshComments] = React.useState(true)

  const { user } = useContext(authContext);
  
  const { id } = useParams();


  React.useEffect(() => {
    const url = `http://localhost:3001/api/comment/${id}`
    if (refreshComments) {
      console.log("HEREREEEEEEEEEEEEEEEE")
      // Fetch the comments and set the comments into the components state
      // axios.get(`http://localhost:3001/:id/comments`),
      
      axios.get(url)
      .then(response => {
        const newComments = []
        for (let i = 0; i < response.data.length; i++) {
          newComments.push({
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: response.data[i].username,
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: response.data[i].comment,
            datetime: (
                      <Tooltip title={moment(response.data[i].date_created).format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(response.data[i].date_created).fromNow()}</span>
                      </Tooltip>
                    )
          })
          }
          console.log(newComments,response , response.data);
        setComments(newComments)
      })
      .catch(error => {
        console.log(error)
      })
      setRefreshComments(false);
    }
  }, [refreshComments, id])

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setComments([
        ...comments,
        {
          // Change to pull info from DB username/ we dont have a avatar column {}
          username:{},
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ])
      setValue('');
    }, 1000);

      //ONCE /POST PAGE HAS BEEN LINKED TO ID TEST IF POST REQUEST IS WORKING FOLLOW UP WITH KAORU
    const url = "http://localhost:3001/api/comment"
    const payload = {
      comment: value,
      // date_created: '2025,01,01',
      cat_form_id: id,
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