import React from "react";

export class Goal extends React.Component {

  toggleComplete(e){
    this.props.toggleComplete(e);
  }

  editGoal(e){
    this.props.editGoal(e);
  }

  removeGoal(e){
    this.props.removeGoal(e);
  }

  renderCheckbox(){
      if(this.props.goal.completed === true){
        return (<i className="fa fa-check-square-o fa-lg" aria-hidden="true"></i>);
      }
      else{
        return (<i className="fa fa-square-o fa-lg" aria-hidden="true"></i>);
      }
  }

  render(){
    return(
      <div className="card--goal clearfix">
        <div className="card--goal__name">
          <p>{this.props.goal.name}</p>
        </div>
        <div className="card--goal__actions">
          <a href="#" onClick={this.toggleComplete.bind(this)}>{ this.renderCheckbox() }</a>
          <a href="#" onClick={this.editGoal.bind(this)}><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></a>
          <a href="#" onClick={this.removeGoal.bind(this)}><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }

}
