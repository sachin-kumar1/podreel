var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const editorRouter = require('./routes/editor-routes');
const app = express();
app.use(cors());
app.use(express.json())
app.use("/editor-contents",editorRouter)

mongoose
  .connect(
    'mongodb+srv://sachin:sachin56@cluster0.ktxmkc8.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.use('/editor/contents', (req, res, next) => {
      res.send({ okay: 'test' });
    });

    app.listen(5000, () => {
      console.log('APP IS RUNNING at port 5000');
    });
  })
  .catch((err) => {
    console.log("error happened here")
    console.log(err);
  });
