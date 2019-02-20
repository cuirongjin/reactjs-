import React, { Component } from 'react';
// 组件生命周期
// 初始化
// 组件更新
// 组件销毁

class  LikesBtn  extends Component {
  constructor (props){
    super(props)
    this.state={
      likes:0
    }
  }
  handleBtn () {
    this.setState({
      likes:++this.state.likes
    })
  }
  render () {
    return (
      <div className="likes-button-component">
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={this.handleBtn.bind(this)}
        >
          点击: {this.state.likes}
        </button>
      </div>
    )
  }
}
export default LikesBtn;