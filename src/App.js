import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
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
]
class App extends Component{
  render(){
  return (
    <div>
    {customers.map(c=> {
    return <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday}  gender = {c.gender}  job = {c.job}/>
    }
  )
}
</div>
    );
  }
}

export default App;
