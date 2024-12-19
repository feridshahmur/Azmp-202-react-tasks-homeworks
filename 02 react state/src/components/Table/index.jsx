import React, { useState } from "react";
import Swal from "sweetalert2";

const Table = ({ allTodos, setAllTodos }) => {
  const [editingTodo, setEditingTodo] = useState(null); // Hansı tapşırığın redaktə edildiyini izləmək üçün

  const handleCheckboxChange = (id) => {
    const updatedTodos = allTodos.map((todo) =>
      todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
    );
    setAllTodos(updatedTodos);
  };

  const handleDelete = (todoId) => {
    setAllTodos(allTodos.filter((q) => q.id !== todoId));
  };

  const handleEditSave = (id, newName) => {
    const updatedTodos = allTodos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setAllTodos(updatedTodos);
    setEditingTodo(null); // Redaktə modundan çıxmaq
  };

  return (
    <div>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">ToDo Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allTodos &&
            allTodos.map((t) => (
              <tr key={t.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={t.iscompleted}
                    onChange={() => handleCheckboxChange(t.id)}
                  />{" "}
                  <span
                    style={{
                      textDecoration: t.iscompleted ? "line-through" : "none",
                    }}
                  >
                    {t.name}
                  </span>
                </td>
                <td>
                  {/* Edit düyməsi */}
                  <button
                    style={{ marginRight: "10px", backgroundColor: "blue", color: "white" }}
                    onClick={() => setEditingTodo(t.id)} // Redaktə rejiminə keç
                  >
                    Edit
                  </button>

                  {/* Delete düyməsi */}
                  <button
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(t.id);
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                          });
                        }
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Edit form */}
      {editingTodo && (
        <div>
          <h3>Edit ToDo</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newName = e.target.elements.newName.value.trim();
              if (newName) {
                handleEditSave(editingTodo, newName);
              }
            }}
          >
            <input
              type="text"
              name="newName"
              defaultValue={
                allTodos.find((todo) => todo.id === editingTodo)?.name || ""
              }
            />
            <button type="submit" style={{ marginLeft: "10px" }}>
              Save
            </button>
            <button
              type="button"
              style={{ marginLeft: "10px" }}
              onClick={() => setEditingTodo(null)} // Redaktə formunu bağla
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Table;
