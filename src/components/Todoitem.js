import React, {Component} from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {
    getStyle = () =>{

    return {
        background:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
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


  ///This is called deconstructing. I am pulling out the id and title that i need
        const {id, title} =this.props.todo;
        return(
            <div style={this.getStyle()}>
           <p><input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
           {title}</p>
           
            </div>
        )
    }
}

TodoItem.propTypes= {
    todo:PropTypes.object.isRequired
}

// you can also use variables



export default TodoItem