import AddTodo from "./TodoAdd";
import ListTodo from "./ListTodo";
import ComputedTodo from "./ComputedTodo";
import { useState, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const TodoArea = () => {
    const [todos, setTodos] = useState(initialState);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };
    const updateTodo = (id) => {
        const newArray = todos.map((todo) => {
            if (todo.id === id) {
                todo.state = !todo.state;
            }
            return todo;
        });
        setTodos(newArray);
    };
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <main className="container mx-auto mt-8 px-4">
            {/* Todo FORM */}
            <AddTodo addTodo={addTodo} />
            {/* Todo List (TodoItem)  Todo update TodoDelete*/}
            <ListTodo todos={todos} updateTodo={updateTodo} />
            {/* Todo computed */}
            <ComputedTodo />
        </main>
    );
};
export default TodoArea;
