import CrossItem from "../../icons/crossIcon"
const ListTodo = () =>
{
    return(
        <article className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
        <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
        <p className="text-gray-400 inline-block grow mx-4">
            Complete online JavaScript Curse
        </p>

        <button>
            <CrossItem />
        </button>
    </article>
    );
}
export default ListTodo;