import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDosContainer from './ToDosContainer/ToDosContainer';
import ToDoForm from './ToDoForm/ToDoForm';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
class App extends Component {
  constructor(){
    super();
    this.state = {
      ToDos: []
    };
  }

  addToDo = (todo) =>{
    this.setState({ToDos: [...this.state.ToDos, todo]})
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1 className='title'><span>ToDo</span> List</h1>
          <ToDoForm addToDo={this.addToDo}/>
          <ToDosContainer ToDos={this.state.ToDos}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
