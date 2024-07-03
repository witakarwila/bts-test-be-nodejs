const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var userAuthRouter = require('./routes/user')
var checklistRouter = require('./routes/checklist')
var checklistItemRouter = require('./routes/checklistItem')

app.use('/', userAuthRouter)
app.use('/', checklistRouter)
app.use('/checklist', checklistItemRouter)

app.get('/', (req, res) => {
  res.send('You need to login to access the API')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
