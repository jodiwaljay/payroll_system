import mongoose from 'mongoose';
import Message from '../models/message';

app.post('/message', (req, res) => {
  var newMessage = new Message(req.body);
  newMessage.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});
