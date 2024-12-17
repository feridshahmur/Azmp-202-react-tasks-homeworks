import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ allTodos, setAllTodos }) => {
  const [name, setName] = useState(""); // Input üçün state

  // Form submit funksiyası
  const handleSubmit = (event) => {
    event.preventDefault(); // Default davranışı blokla

    if (name.trim()) { // Input boş olmadıqda
      const newTodo = {
        id: nanoid(), // Yeni id
        name: name.trim(), // Input dəyəri
      };

      setAllTodos([...allTodos, newTodo]); // Yeni todo əlavə et
      setName(""); // Input-u təmizlə
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
