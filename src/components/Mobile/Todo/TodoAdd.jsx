import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        state: false,
        description: "",
    });

    const { state, description } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            ...todo,
        });
        console.log(description, state);
    };

    const handleChange = (e) => {
        const {name,value} = e.target;
        setTodo({
            ...todo,
            [name] : value
        });
    };
            
    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-4 items-center overflow-hidden rounded-md py-4 px-4 my-8 bg-white"
        >
            <button type="submit">
                <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
            </button>

            <input
                name="description"
                type="text"
                className="w-full text-gray-400 outline-none"
                placeholder="Create a new Todo ..."
                value={todo.description}
                onChange={handleChange}
            />
        </form>
    );
};
export default AddTodo;
