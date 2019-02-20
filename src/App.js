import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesBtn from './components/LikesBtn';
import DigitalClock from './components/DigitalClock';
import InputBox from './components/inputBox';
import CommentList from './components/commentList';
import  ThemeContext  from  './theme-context'
const theme={
  light:{
    className:'btn btn-primary',
    bgColor:"#eeeeee",
    color:"#000"
  },
  dark:{
    className:'btn btn-light',
    bgColor:"#222222",
    color:"#fff"
  }
}

class App extends Component {
  constructor (props){
    super(props)
    this.state={
      comments:["this is first  redky"]
    }
  }
  addList(addList){
    this.setState({
      comments:[...this.state.comments,addList]
    })
  }
  handleDelete(index){
    const  comments=[...this.state.comments]
    comments.splice(index,1);
    this.setState({
      comments:comments
    })
  }
  render() {
    const  {comments}=this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <NameCard name="vikeing" number={176111160981} isHuman={true}  tags={["沉着","冷静","自信"]}/>
        <LikesBtn/>
        <DigitalClock/> 
        <CommentList  handleDelete={this.handleDelete.bind(this)} comments={comments} />
        <InputBox  addList={this.addList.bind(this)} commentsLength={comments.length}/>
         
        */}
        <a 
        href="#theme-switcher"
        className="btn btn-light"
        > 浅色主题</a>
         <a 
        href="#theme-switcher"
        className="btn btn-secondary"
        > 深色主题</a>
        
      </div>
    );
  }
}

export default App;
