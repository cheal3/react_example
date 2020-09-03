const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers/', (req,res) =>{
  res.send([{
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '염소',
    'birthday':'031223',
    'gender':'여자',
    'job':'대학생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '최동욱',
  'birthday': '951211',
  'gender': '남자',
  'job': '인턴'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '털보',
  'birthday': '961127',
  'gender': '남자',
  'job': '개'
  }
]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));
