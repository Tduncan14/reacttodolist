import React, { Component } from 'react';
import Todos from './components/Todo';
import './App.css';
import Header from'./components/layout/header';
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed:true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle complete method
  markComplete = (id) =>{
     this.setState({
       todos: this.state.todos.map(todo =>{
         if(todo.id === id){
           todo.completed =!todo.completed;
         }
         return todo;
       })
     })
  }

  //
  delTodo =(id) =>{
   this.setState({todos:[...this.state.todos.filter(todo => todo.id !==id)]})
  }

  // Add todo 
  addTodo=(title)=>{

    const newTodo ={
      id:4,
      title:title,
      completed:false
    }
    this.setState({
     
      todos:[...this.state.todos, newTodo]});
  }

  render() {
   
    return (
      <div className="App">
        <div className ="container">
        <Header />
        <AddTodo  addTodo={this.addTodo}/>
         <Todos todos={this.state.todos} markComplete={this.markComplete}
         delTodo ={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
