import React from 'react';
import './Card.css';

const Card = ({project})=> {
  let mappedTasks = project.tasks.map((task)=> {
    return (
      <div className='task'>
        <button className='check-btn'></button>
        <h4 className='task-name'>{task.name}</h4>
      </div>
      )
  })

  return(
   <div className='card'>
     <h2>{project.name}</h2>
     <hr/>
     {mappedTasks}
   </div>
  )
}

export default Card;