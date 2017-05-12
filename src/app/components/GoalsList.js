import React from 'react';

export class GoalsList extends React.Component {

  editGoal(index, e){
    e.preventDefault();
    this.props.editGoal(index);
  }

  removeGoal(index, e){
    e.preventDefault();
    this.props.removeGoal(index);
  }

  toggleComplete(index, e){
    e.preventDefault();
    this.props.toggleComplete(index);
  }

  render(){
    const goals = this.props.goals.map((goal, index) => {
      return (
        <div key={index}>
          <a href="" onClick={this.toggleComplete.bind(this, index)}>
            { goal.completed === true ? <i className="fa fa-check-square-o" aria-hidden="true"></i> : <i className="fa fa-square-o" aria-hidden="true"></i> }
          </a>
          <p>{goal.name}</p>
          <a href="" onClick={this.editGoal.bind(this, index)}>edit</a>
          <a href="" onClick={this.removeGoal.bind(this, index)}>delete</a>
        </div>
      );
    });
    return(
      <div>
        { goals }
      </div>
    );
  }
}
