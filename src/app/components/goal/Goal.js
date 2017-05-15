import React from "react";

export class Goal extends React.Component {

  constructor(){
    super();
    this.state = {
      confirmOpen: false
    }
  }

  toggleComplete(e){
    this.props.toggleComplete(e);
  }

  editGoal(e){
    this.props.editGoal(e);
  }

  removeGoal(e){
    e.preventDefault();
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

  setConfirmBoxState(state){

    this.setState({
      confirmOpen: state
    });

  }

  renderActions(){
    if(this.state.confirmOpen){
      return(
        <div>
          <a href="" onClick={this.removeGoal.bind(this)}><i className="fa fa-check fa-lg" aria-hidden="true"></i></a>
          <a href="" onClick={this.setConfirmBoxState.bind(this, false)}><i className="fa fa-times fa-lg" aria-hidden="true"></i></a>
        </div>
      );
    }
    else{
      return(
        <div>
        <a href="#" onClick={this.toggleComplete.bind(this)}>{ this.renderCheckbox() }</a>
        <a href="#" onClick={this.editGoal.bind(this)}><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></a>
        <a href="#" onClick={this.setConfirmBoxState.bind(this, true)}><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></a>
        </div>
      );
    }
  }

  render(){
    return(
      <div>
        <div className="card--goal clearfix">
          <div className="card--goal__name">
            <p>{this.props.goal.name}</p>
          </div>
          <div className="card--goal__actions">
            { this.renderActions() }
          </div>
        </div>
      </div>
    );
  }

}
