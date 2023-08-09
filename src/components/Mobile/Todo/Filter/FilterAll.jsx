/* eslint-disable react/prop-types */
const FilterAll = ({ SetFilter }) => {
    return (
        <button
            onClick={() => SetFilter("all")}
            className="mx-2 hover:text-blue-600 dark:hover:text-purple-800"
        >
            All
        </button>
    );
};
export default FilterAll;
