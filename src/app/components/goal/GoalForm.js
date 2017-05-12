import React from 'react';

export class GoalForm extends React.Component {

  submitHandler(e){
    this.props.submitHandler(e);
  }

  changeHandler(e){
    this.props.changeHandler(e);
  }

  render(){
    return (
      <div>
        <form id="addGoalForm" className="clearfix" onSubmit={this.submitHandler.bind(this)}>
          <input
            type="text"
            placeholder="Add a goal..."
            autoComplete="off"
            value={this.props.currentGoal}
            onChange={this.changeHandler.bind(this)}
          />
          <input type="submit" value={ this.props.isEditing === true ? 'Edit' : 'Add' } />
        </form>
      </div>
    );
  }
}
