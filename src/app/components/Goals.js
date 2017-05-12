import React from "react";

import { Header } from "./Header";

// import some mock goals (these would come from the server in a real world app)
import { GOALS } from '../mock-goals';

// import goal components
import { GoalStats } from './goal/GoalStats';
import { GoalForm } from './goal/GoalForm';
import { GoalList } from './goal/GoalList';

export class Goals extends React.Component {

  constructor(){
      super();
      this.state = {
        goals: GOALS,
        currentGoal: '',
        currentGoalKey: null,
        isEditing: false
      }
  }

  updateCurrentGoal(e){
    const currentGoal = e.target.value;
    this.setState({
      currentGoal
    });
  }

  editGoal(goal){

    this.setState({
      isEditing: true,
      currentGoal: this.state.goals[goal].name,
      currentGoalKey: goal
    });

  }

  removeGoal(goal){
    let goals = this.state.goals.slice();
    goals.splice(goal, 1);
    this.setState({
      goals,
      isEditing: false,
      currentGoal: '',
      currentGoalKey: null
    });
  }

  handleSubmit(e){
    e.preventDefault();

    const isEditing = this.state.isEditing;
    const goals = this.state.goals;
    const currentGoal = this.state.currentGoal;

    if(isEditing){

      goals[this.state.currentGoalKey].name = currentGoal;
      this.setState({
        goals,
        isEditing: false,
        currentGoal: ''
      });

    }
    else{

      if(!currentGoal){
        return;
      }

      goals.push({
        name: this.state.currentGoal,
        completed: false
      });

      this.setState({
        goals: goals,
        currentGoal: ''
      });

    }
  }

  toggleComplete(goal){
    const goals = this.state.goals;
    goals[goal].completed = !goals[goal].completed;

    this.setState({
      goals
    });

  }

  render(){
      return(
        <div>
          <div className="wrapper">
            <Header />

            <GoalStats goals={this.state.goals} />

            <GoalForm
              submitHandler={this.handleSubmit.bind(this)}
              currentGoal={this.state.currentGoal}
              changeHandler={this.updateCurrentGoal.bind(this)}
              isEditing={this.state.isEditing}
            />

            <GoalList
              goals={this.state.goals}
              editGoal={this.editGoal.bind(this)}
              removeGoal={this.removeGoal.bind(this)}
              toggleComplete={this.toggleComplete.bind(this)}
            />

          </div>
        </div>
      );
  }
}
