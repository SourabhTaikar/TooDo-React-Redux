import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { removeTodo } from '../redux/Todoapp/actions/action';
import {handleCheckbox} from '../redux/Todoapp/actions/action'
const Todos = () => {
  const todos = useSelector((state) => state.reducers); 
  const dispatch = useDispatch ();
  return todos.map((todo) => (
        <>
        <div key={todo.id} className='todoBox'>
          <input type='checkbox' checked={todo.completed}
          onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
          <p style={todo.completed===true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
            {todo.todo}
          </p>
        </div>
        <div>

          <span className='remove' onClick={()=> dispatch(removeTodo(todo.id))}><FaTrash></FaTrash></span>
        </div>
        </>
      ))

  
}

export default Todos;
