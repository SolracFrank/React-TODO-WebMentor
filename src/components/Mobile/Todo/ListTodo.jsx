/* eslint-disable react/prop-types */
import Todo from "./Todo";
const ListTodo = ({ todos, updateTodo, deleteTodo}) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} 
                todo={todo} 
                updateTodo = {updateTodo}
                deleteTodo = {deleteTodo}
                />
            ))}
        </>
    );
};
export default ListTodo;
