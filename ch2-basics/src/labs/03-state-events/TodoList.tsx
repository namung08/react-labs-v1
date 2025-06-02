import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
