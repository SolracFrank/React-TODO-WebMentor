import CrossItem from "../../icons/crossIcon";
import AddTodo from "./addTodo";
const TodoArea = () => {
    return (
        <main className="container mx-auto mt-8 px-4">
            {/* Todo FORM */}
            <AddTodo />
            {/* Todo List (TodoItem)  Todo update TodoDelete*/}
            <article className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
                <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
                <p className="text-gray-400 inline-block grow mx-4">
                    Complete online JavaScript Curse
                </p>

                <button>
                    <CrossItem />
                </button>
            </article>
            {/* Todo computed */}
            <section className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
                <p className="grow text-gray-400"> 5 Items left</p>
                <p className=" text-gray-400"> Clear completed</p>
            </section>
        </main>
    );
};
export default TodoArea;
