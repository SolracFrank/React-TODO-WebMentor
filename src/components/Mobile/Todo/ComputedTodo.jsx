/* eslint-disable react/prop-types */

const ComputedTodo = ({ deleteAll, countIncomplete }) => {
    return (
        <section className="bg-white dark:bg-gray-700 flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
            <p className="grow text-gray-400 dark:text-gray-200">
                {countIncomplete()} Items left
            </p>
            <p
                className=" text-gray-400  dark:text-gray-200"
                onClick={() => deleteAll()}
            >
                Clear completed
            </p>
        </section>
    );
};

export default ComputedTodo;
