import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
            avatarSrc={faker.image.avatar()}
            author="Sam"
            timeAgo="Today at 4:45 PM"
            comment="Good read!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
            avatarSrc={faker.image.avatar()}
            author="Alex"
            timeAgo="Today at 2:44 AM"
            comment="Nice post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
            avatarSrc={faker.image.avatar()}
            author="Jane"
            timeAgo="Today at 3:15 AM"
            comment="Truthy?"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);
