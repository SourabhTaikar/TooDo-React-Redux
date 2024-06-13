import React from 'react'
import { AddToDo, HandleCheckBox, RemoveToDo } from '../actions/action';

const innitialState=[
    
];
export const reducers = (state=innitialState ,action)=>{
        switch(action.type){
            case AddToDo: 
                return [...state, action.payload]
            case RemoveToDo:
                const filtredTodos = state.filter((todo)=>todo.id!==action.payload);
                return filtredTodos;
            case HandleCheckBox:
                let todoArray=[];
                state.map((item)=>{
                    if (item.id===action.payload){
                    item.completed = !item.completed;
                    }  
                    todoArray.push(item) ;
                })
                return todoArray
            default: return state;
        }
    }
  

