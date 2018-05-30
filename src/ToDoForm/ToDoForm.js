import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import './ToDoForm.css';

const getProjectsQuery = gql`
  {
    projects {
      name
      id
    }
  }`;

  const addTaskMutation = gql`
    mutation AddBook($name: String!, $done: Boolean!, $projectId: ID!){
        addTask(name: $name, done: $done, projectId: $projectId){
            name
            id
        }
    }
`;

class ToDoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      project: '',
      task: ''
    }
  }

  changeProjectInput = (event) => {
    this.setState({project: event.target.value})
  }

  changeTaskInput = (event) => {
    this.setState({task: event.target.value})
  }

  submitToDo = (event) =>{
    event.preventDefault()
    this.props.addTaskMutation({
      variables: {
        name: this.state.task,
        done: 'false',
        projectId: this.state.project
      },
      refetchQueries: [{ query: getProjectsQuery }]
    })
  }

  mapProjectOptions(){
    if(!this.props.data.loading){
      return this.props.data.projects.map(project => {
        return <option value={project.id}>{project.name}</option>
      })
    }
  }

  render(){
    return (
      <form className='add-task-form'>
        <select name="project" onChange={this.changeProjectInput}>
          <option value=''>Select A Project</option>
          { this.mapProjectOptions() }
        </select>
        <input type='text' placeholder='Task' className='task-input' onChange={this.changeTaskInput}/>
        <button className='submit-btn' onClick={this.submitToDo}>Add Task</button>
      </form>
    )
  }
}


export default compose(
  graphql(getProjectsQuery),
  graphql(addTaskMutation, {name: "addTaskMutation"}),
)(ToDoForm);