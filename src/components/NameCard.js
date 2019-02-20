import React, { Component } from 'react';

class  NameCard  extends Component {
  render () {
    const {name,number,isHuman,tags}=this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>电话:{number}</li>
          <li>{isHuman?"人类":"外星生物"}</li>
          <hr/>
           <p>
             {
               tags.map((tag,idnex)=>(
                 <span className="bage bage-pill bage-primary" key={idnex}>{tag}</span>
               ))
             }
           </p>
        </ul>
      </div>
    )
  }
}
export default NameCard;