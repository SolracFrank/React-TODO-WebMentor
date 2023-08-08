/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useMemo } from "react";

const ComputedTodo = ({ deleteAll, countIncomplete }) => {
    return (
        <section className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
            <p className="grow text-gray-400">{countIncomplete()} Items left</p>
            <p className=" text-gray-400" onClick={() => deleteAll()}>
                Clear completed
            </p>
        </section>
    );
};

export default ComputedTodo;
