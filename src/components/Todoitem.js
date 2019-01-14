import React, {Component} from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {
    getStyle = () =>{

    return {
        textDecoration: this.props.todo.completed ?'line-through':'none'
    }

     /*  if(this.props.todo.completed) {
           return{
               textDecoration:"line-through"
           }
       }
       else{
           return{ textDecoration:"none"
       }

       }*/
    }

    render(){
        return(
            <div style={this.getStyle()}>
           <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes= {
    todo:PropTypes.object.isRequired
}

// you can also use variables



export default TodoItem