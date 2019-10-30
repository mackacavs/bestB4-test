const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost/bestB4', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => {
    console.log("We have connected")
  });

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("App is listening"))