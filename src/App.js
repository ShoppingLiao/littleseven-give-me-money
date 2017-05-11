import React, { Component } from 'react';
import moment from 'moment';

import logo from './logo.png';
import peterHan from './peterHan.png';
import pan from './Pan.png';
import tri from './tri.svg';
import './App.css';
/*
  Todo:
    1. style & css 整理
    2. 時間 momentJS 很克難的搞定
        // moment應該可以直接改  然後用formate('LT')跑出來才對.. 
        // moment.updateLocale('en', {
        //   meridiem: {
        //     am: '上午',
        //     AM: '上午',
        //     pm: 'pm',
        //     PM: 'PM'
        //   }
        // });
    3. 切換說話的人   很克難的做法
    4. 多個說話結果
    5. 文字折行
*/

const PEOPLE = [
  {
    name: '譚小七™',
    pic: logo
  },
  {
    name: '翻鼠(ʘдʘ╬)',
    pic: peterHan
  },
  {
    name: '月半',
    pic: pan
  }
];

class Message extends Component {
  render() {
    const { data } = this.props;
    const person = PEOPLE[data.number];
    return (
      <div style={{ margin: '20px', textAlign: 'center', fontSize: '14px' }}>
        <img src={person.pic} style={{ display: 'inline-block', height: '50px', width: '50px', borderRadius: '25px' }} alt="logo" />
        <div style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'top' }}>
          <div style={{ textAlign: 'initial', fontSize: '14px', color: '#737B88'}}>{person.name}</div>
          <div style={{ display: 'inline-block', marginTop: '5px' }}>
            <img src={tri} style={{ position: 'absolute', height: '12px', width: '12px', marginTop: '6px' }} alt="tri" />
            <div className="content">{data.content}</div>
          </div>
        </div>
        <div style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '8px', color: '#ACAFB6', fontSize: '14px' }}>{data.time}</div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this._createMsg = this._createMsg.bind(this);

    this.state = {
      Msg: 'Shopping超帥'
    };
  }
  _createMsg() {
    this.setState({
      data: {
        number: this.refs.selectPerson.value,
        content: this.refs.newMessage.value,
        time: `${moment().format('HH') < 12 ? '上午' : '下午'} ${moment().format('hh:mm')}`
      }
    });
  }
  render() {
    const { data } = this.state;
    console.log(moment().format('hh:mm'))
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>歡迎使用小七哥請款產生器</h1>
          <h2>Welcome to LittleSeven Give Me Money</h2>
        </div>
        <div className="App-body">
          <div>
            <label> 請款對象: </label>
            <select ref="selectPerson" defaultValue="0">
              {PEOPLE.map((person, idx) => <option key={idx} value={idx}> {person.name} </option>)}
            </select>
          </div>
          <div>
            <label>請款單內容:</label>
            <input ref="newMessage" placeholder="輸入請款單要顯示的文字" />
          </div>
          <button onClick={this._createMsg}>產生</button>
        </div>
        {data && <Message data={data} />}
      </div>
    );
  }
}

export default App;
