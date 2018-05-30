import React from 'react';
import Card from '../Card/Card';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import './ToDosContainer.css';

const getTasksQuery = gql`
  {
    projects{
      name
      id
      tasks{
        name
        done
      }
    }
  }`;


const ToDosContainer = (props) => {
  let mappedToDos;
  if(props.data.loading){
    mappedToDos = 'loading...'
  }else {
    mappedToDos = props.data.projects.map((project)=><Card project={project}/>)
  }
  
  return(
    <div>
      <div className='section-title'>
        <h3>Projects</h3>
        <hr/>
      </div>
      <div className='card-container'>
        {mappedToDos}
      </div>
      
    </div>
  )
}

export default graphql (getTasksQuery)(ToDosContainer)