import React, { Component } from 'react';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import CommentBox from './CommentSection';

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

// const onFinish = (values) => {
//   console.log('Received values of form: ', values);

//   return axios.get(`http://localhost:3001/api/comments`)
//       .then(res => onApples(res.data))
//       .catch(error => {
//       this.setState({ errorMessage: error.toString() });
//       console.error('There was an error!', error);
//       });
      
// };


export default class CommentsList1 extends Component {
  render() {
    return (
    <div>
        <List
          className="comment-list"
          header={`${data.length} replies`}
          // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
        )}
      />
      <CommentBox />
    </div>

    );
  }
}
