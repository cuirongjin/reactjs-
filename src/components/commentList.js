import React, { Component } from 'react';

class  CommentList  extends Component {
  constructor (props) {
    super(props)
   }
   
   removeList (index) {
     this.props.handleDelete(index)
    
  }
   render () {
     
    const {comments}=this.props;
    return (
      <div className="comment-list-component">
          <label>评论列表</label>
          <ul className="list-group mb-3">
            {
              comments.map((comment,index)=>(
                <li key={index} onClick={this.removeList.bind(this,index)}>{comment}</li>
              ))
            }
          </ul>
      </div>
    )
   }
}


export default CommentList