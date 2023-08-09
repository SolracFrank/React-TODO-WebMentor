/* eslint-disable react/prop-types */
import CrossItem from "../../icons/crossIcon";
import CheckIcon from "../../icons/checkIcon";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
    const { id, description, state } = todo;

    return (
        <article className="bg-white  flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto dark:bg-gray-600">
            <button
                className={`${
                    state ? " bg-cyan-500 dark:bg-purple-600" : ""
                } rounded-full border-2 h-5 w-5 inline-block`}
                onClick={() => {
                    updateTodo(id);
                }}
            >
                {state && <CheckIcon />}
            </button>

            <p
                className={`${
                    state ? "line-through" : ""
                } text-gray-400 dark:text-gray-200 inline-block grow mx-4`}
            >
                {description}
            </p>

            <button onClick={() => deleteTodo(id)}>
                <CrossItem />
            </button>
        </article>
    );
};

export default Todo;
