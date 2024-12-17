import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Table = ({allTodos, setAllTodos}) => {
    const handleDelete = (todoNameId) => {
        setAllTodos(allTodos.filter((q) => q.id !== todoNameId));
      };
  return (
    <div>
      <table className="table table-striped-columns">
        <thead>
          <tr>
           
            <th scope="col">ToDo name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {allTodos && allTodos.map((t)=>{
                return(
                    <tr key={t.id}>
                        <td>{t.name}</td>
                        <td><button style={{backgroundColor : "red"}} onClick={()=>{handleDelete(t.id)}}>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
          
        </table>
    </div>
  )
}

export default Table
