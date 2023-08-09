import AddTodo from "./TodoAdd";
import ListTodo from "./ListTodo";
import ComputedTodo from "./ComputedTodo";
import FilterTodo from "./FilterTodo";
import { useState, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const TodoArea = () => {
    const [todos, setTodos] = useState(initialState);
    const [filter, setFilter] = useState("all");
    const FilterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "completed":
                return todos.filter((todo) => todo.state);
            case "active":
                return todos.filter((todo) => !todo.state);
            default:
                return todos;
        }
    };
    const SetFilter = (x) =>
    {
        setFilter(x);
    }

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
    const deleteAll = () => {
        const newArray = todos.filter((todo) => todo.state != true);
        setTodos(newArray);
    };
    const countIncomplete = () => {
        let count = 0;
        todos.forEach((element) => {
            !element.state ? count++ : null;
        });
        return count;
    };
    const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
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
            <ListTodo
                todos={FilterTodos()}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
            {/* Todo computed */}
            <ComputedTodo
                todos={todos}
                deleteAll={deleteAll}
                countIncomplete={countIncomplete}
            />
            <FilterTodo SetFilter = {SetFilter}/>
            
        </main>
    );
};
export default TodoArea;
