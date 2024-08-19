import React, { useState } from 'react';

import './App.css';
import Input from './components/Input';
import { Todos } from './types/Types';
import Message from './components/Message';

function App ()  {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])
  const addMessage = () => {
    if(todo) setTodos([...todos,{message: todo, id: todos.length + 1 }])
      setTodo('')
    }
  const deleteMessage = (id:number) => {
    setTodos(todos.filter(todo => todo.id != id))
  }  
  console.log(todos);
  return (
    <div className="App">
      <Input addMessage= {addMessage} todo = {todo} setTodo = {setTodo} />
      <Message deleteMessage = {deleteMessage} todos = {todos} />
    </div>
  );
}

export default App;
