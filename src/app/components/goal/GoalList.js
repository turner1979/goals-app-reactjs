import React from 'react';

import { Goal } from './Goal';

export class GoalList extends React.Component {
  render(){
    const goals = this.props.goals.map((goal, index) => {
      return (
        <Goal
          goal={goal}
          key={index}
          toggleComplete={this.props.toggleComplete.bind(this,index)}
          editGoal={this.props.editGoal.bind(this, index)}
          removeGoal={this.props.removeGoal.bind(this, index)}
        />
      );
    });
    return(
      <div>
        { goals }
      </div>
    );
  }
}
