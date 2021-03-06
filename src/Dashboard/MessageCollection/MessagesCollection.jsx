import { Container, CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/firebase';
import MessageCard from '../MessageCard/MessageCard';
import makeStyles from './MessageCollection.styles';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .get()
      .then((snapshot) => {
        const messages = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          messages.push(data);
        });
        setMessages(messages);
      })
      .catch((error) => console.log(error));
  });

  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <CssBaseline />
      <h1>Here are your new messages...</h1>
      <Container>
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            className={classes.card}
            name={message.name}
            message={message.message}
            subject={message.subject}
            email={message.email}
          />
        ))}
      </Container>
    </div>
  );
};

export default Messages;
