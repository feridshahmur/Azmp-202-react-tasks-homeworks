import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <>
      <h1 className='hasbir'>To Do App</h1>
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Table allTodos={allTodos} setAllTodos={setAllTodos} />
    </>
  )
}

export default App