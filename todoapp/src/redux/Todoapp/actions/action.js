export const AddToDo = 'AddToDo';
export const RemoveToDo = 'RemoveToDo';
export const HandleCheckBox = 'HandleCheckBox'

export const addTodo = (payload)=>{
    return{
        type: AddToDo,
        payload
    }
}

export const removeTodo = (payload)=>{
    return{
        type: RemoveToDo,
        payload
    }
}

export const handleCheckbox = (payload) =>{
    return{
        type: HandleCheckBox,
        payload
} }