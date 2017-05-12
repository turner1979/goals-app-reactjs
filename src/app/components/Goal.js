import React from "react";

export class Goal extends React.Component {

  handleRemove(e){
    e.preventDefault();
    console.log('remove');
  }

    render(){
      return(
        <div>
          <a href="" ><i className="fa fa-check-square-o" aria-hidden="true"></i> Goal Name</a>
          <a href=""><i className="fa fa-pencil" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-trash-o" aria-hidden="true"></i></a>
        </div>
      );
    }
}
