/* eslint-disable react/prop-types */
import CrossItem from "../../icons/crossIcon";

const Todo = ({ todo, updateTodo }) => {
    const { id, description, state } = todo;
    return (
        <article className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
            <button
                className="rounded-full border-2 h-5 w-5 inline-block"
                onClick={() => {
                    updateTodo(id);
                }}
            ></button>

            <p
                className={`${
                    state ? "line-through" : ""
                } text-gray-400 inline-block grow mx-4`}
            >
                {description}
            </p>

            <button>
                <CrossItem />
            </button>
        </article>
    );
};

export default Todo;
