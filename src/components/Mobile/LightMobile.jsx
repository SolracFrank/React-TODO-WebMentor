import FilterTodo from "./Todo/FilterTodo";
import Header from "./Todo/Header";
import TodoArea from "./Todo/TodoArea";

const LightMobile = () => {
    return (
        <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen">
            <Header />
            <TodoArea />
            <FilterTodo />
        </div>
    );
};

export default LightMobile;
