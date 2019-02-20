import React, { Component } from 'react';
// 组件生命周期
// 初始化
// 组件更新
// 组件销毁

class  DigitalClock  extends Component {
  constructor (props){
    super(props)
    this.state={
      likes:0,
      date:new Date()
    }
  }
  //初始化
  componentDidMount () {
    this.timer=setInterval(()=>{
        this.setState({
          date:new Date()
        })
    },3000)
  }
  //更新 
  componentDidUpdate (currentProps,currentState) {
      console.log(currentState)
  }
  //销毁
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div className="digital-clock-component junbotrom" >
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default DigitalClock;