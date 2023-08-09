/* eslint-disable react/prop-types */
const FilterActive = ({SetFilter}) => {
    return <button onClick={() => SetFilter("active")} className="mx-2 hover:text-blue-600">Active</button>;
};
export default FilterActive;