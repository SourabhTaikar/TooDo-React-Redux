import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Todoapp/actions/action';
function Form() {

    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();

        let date = new Date();
        let time = date.getTime();

        let todoObj ={
            id : time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('');
        dispatch(addTodo(todoObj));
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <label>Add your Todo-items</label>
        <div>
            <input type='text' className='inputText' required value={todoValue}
            onChange={(e)=>setTodoValue(e.target.value)}></input>
            <button type='submit' className='submitButton'>Add</button>
        </div>
    </form>
  )
}

export default Form