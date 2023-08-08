const FilterTodo = () =>
{
    return (
        <section className="container mx-auto mt-8 px-4">
        <article className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
            <div className="mx-auto">
                <button className="mx-2 hover:text-blue-600">
                    All
                </button>
                <button className="mx-2 hover:text-blue-600">
                    Active
                </button>
                <button className="mx-2 hover:text-blue-600">
                    Completed
                </button>
            </div>
        </article>
    </section>
    );
};
export default FilterTodo;