/* eslint-disable react/prop-types */
import Todo from "./Todo";
const ListTodo = ({ todos, updateTodo}) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} 
                todo={todo} 
                updateTodo = {updateTodo}
                
                />
            ))}
        </>
    );
};
export default ListTodo;
