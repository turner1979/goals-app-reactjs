
export function getGoals(){

  return JSON.parse(localStorage.getItem("goals"));

};

export function setGoals(goals){

  localStorage.setItem("goals",JSON.stringify(goals));

}
