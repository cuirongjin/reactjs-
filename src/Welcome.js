import React, { Component } from 'react';

class  Welcome  extends Component {
  render () {
    const  isLogin =false
    return (
      <div>
        <h1>
          hello world 
        </h1>
        {isLogin?<p>你已经登录了</p>:<p>未登录</p>}
      </div>
    )
  }
}
export default Welcome;