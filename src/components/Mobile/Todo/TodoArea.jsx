import AddTodo from "./TodoAdd";
import ListTodo from "./ListTodo";
import ComputedTodo from "./ComputedTodo";
const TodoArea = () => {
    return (
        <main className="container mx-auto mt-8 px-4">
            {/* Todo FORM */}
            <AddTodo />
            {/* Todo List (TodoItem)  Todo update TodoDelete*/}
            <ListTodo />
            {/* Todo computed */}
            <ComputedTodo />
        </main>
    );
};
export default TodoArea;
