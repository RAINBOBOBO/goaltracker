import React, { useContext, useState } from 'react';

function GoalsList() {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch list of goals from db using useEffect

  return (
    <div className="GoalsList col-md-8 offest-md-2">
      #GOALS
    </div>
  )
}

export default GoalsList;