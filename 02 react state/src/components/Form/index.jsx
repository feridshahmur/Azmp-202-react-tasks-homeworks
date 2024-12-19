import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ allTodos, setAllTodos , iscompleted , setIscompleted}) => {
  const [name, setName] = useState(""); 

  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (name.trim()) { 
      const newTodo = {
        id: nanoid(),
        date :new Date(8.64e15).toString(),
        name: name.trim(), 
        iscompleted: false
      };

      setAllTodos([...allTodos, newTodo]); 
      setName("");
      setIscompleted(false)
    }else{
      window.alert("input isn't free")
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} // Input dəyişikliklərini izləyir
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
