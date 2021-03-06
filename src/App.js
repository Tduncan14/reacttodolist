import React, { Component } from 'react';
import{BrowserRouter as Router,Route } from 'react-router-dom';
import Todos from './components/Todo';
import './App.css';
import Header from'./components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
//import uuid from 'uuid';
import axios from 'axios';



class App extends Component {
  state = {
    todos:[
    /*  {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed:true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      } */
    ]
  }
  // Lifecycles besides render
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .then(res => this.setState({
        todos:res.data
      }));
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

  // Delete todo
  delTodo =(id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({todos:[...this.state.todos.filter(todo => todo.id !==id)]}) )
  
  }

  // Add todo 
  addTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {title:title,
     completed:false})
     .then(res=>this.setState({ todos:[...this.state.todos, res.data]}));
   
   /* this.setState({
      todos:[...this.state.todos, newTodo]}); */
  }

  render() {
   
    return (
      <Router>
         <div className="App">
         <div className ="container">
         <Header />
         <Route path="/" render={props =>(
           <React.Fragment>
           <AddTodo  addTodo={this.addTodo}/>
         <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo ={this.delTodo}/>
           </React.Fragment>
         )}/>

          <Route path="/about" component={About} />
      
          </div>
          </div>
      </Router>
    );
  }
}

export default App;
