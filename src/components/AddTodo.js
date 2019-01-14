import React,{Component} from 'react';

export class AddTodo extends Component {
    render() {
   return(
    <form>
        <input 
        type="text"
         name="title" 
         placeholder="Add to do list" />

         <input 
         type="submit" 
         value="Submit" 
         className="btn"
         style={{flex:1}}/>
    </form>
       )
    }
}

export default AddTodo