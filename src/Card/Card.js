import React from 'react';

const Card = ({project})=> {
  let mappedTasks = project.tasks.map((task)=> {
    return (
      <div>
        <button>X</button>
        <h3>{task.name}</h3>
      </div>
      )
  })
  
  return(
   <div>
     <h2 >{project.name}</h2>
     {mappedTasks}
   </div>
  )
}

export default Card;