import React from 'react';

export class GoalStats extends React.Component {

  getStats(){
    let stats = { completed: 0, remaining: 0 };
    this.props.goals.map((goal)=> {
      goal.completed === true ? stats.completed++ : stats.remaining++;
    });
    return stats;
  }

  render(){
    let stats = this.getStats();
    return(
      <div className="card--stats">
        <p>You have <strong>{this.props.goals.length}</strong> goals in total.</p>
        <p>
          <strong>{stats.completed}</strong> completed -&nbsp;
          <strong>{stats.remaining}</strong> remaining.
        </p>
      </div>
    );
  }
}
