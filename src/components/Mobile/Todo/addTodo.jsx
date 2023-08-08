const AddTodo = () => {
    return (
        <form className="flex gap-4 items-center overflow-hidden rounded-md py-4 px-4 my-8 bg-white">
            <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
            <input
                type="text"
                className="w-full text-gray-400 outline-none"
                placeholder="Create a new Todo ..."
            />
        </form>
    );
};
export default AddTodo;
