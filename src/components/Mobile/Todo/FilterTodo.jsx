import FilterAll from "./Filter/FilterAll";
import FilterCompleted from "./Filter/FilterCompleted";
import FilterActive from "./Filter/FilterActive";
const FilterTodo = () => {
    return (
        <>
        <section className="container mx-auto mt-8 px-4">
            <article className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
                <div className="mx-auto">
                    <FilterAll/>
                    <FilterCompleted />
                    <FilterActive/>
                </div>
            </article>
        </section>
        <p className="text-center mt-8 text-gray-600">
            Drag and drop to reorder list
        </p>
        </>
    );
};
export default FilterTodo;
