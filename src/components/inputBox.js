import React, { Component } from 'react';

class  inputBox  extends Component {
   constructor (props) {
     super(props)
    }
    handleSub (event) {
      console.log("333")
      this.props.addList(this.textInput.value)
      this.textInput.value=""
      event.preventDefault();
    }
  render () {
    const {commentsLength}=this.props;
    return (
      <form className="p-5" onSubmit={this.handleSub.bind(this)}>
        <div className="form-group">
          <label>留言内容</label>
          <input 
            className="form-control" 
            placeholder="输入留言内容"
            ref={(textInput)=>{this.textInput=textInput}}
            />
        </div>
        <button type="submit" className="btn btn-primary">提交</button>
        <p>
          已经有{commentsLength}
        </p>
      </form> 
     
    )
  }
}
export default inputBox;