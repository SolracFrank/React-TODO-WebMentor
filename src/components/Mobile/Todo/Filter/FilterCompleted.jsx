/* eslint-disable react/prop-types */
const FilterCompleted = ({SetFilter}) => {
    return <button onClick={() => SetFilter("completed")} className="mx-2 hover:text-blue-600">Completed</button>;
};
export default FilterCompleted;