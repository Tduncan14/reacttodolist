import React,{Component} from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';
class Todos extends Component{
   
   
    render(){
         console.log(this.props.todos);
        return  this.props.todos.map((todo) =>(
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
        ));


        }
    }

    //PropTypes
     Todos.protoType = {
         todos:PropTypes.array.isRequired
     }

    export default Todos;
