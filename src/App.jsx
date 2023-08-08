import CrossItem from "./componentes/icons/crossIcon";
import MoonIcon from "./componentes/icons/moonIcon";

const App = () => {
    return (
        <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen">
            <header className="container mx-auto pt-9 px-4 mb-8">
                <div className="flex justify-between text-white">
                    <h1 className="uppercase text-3xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>

                    <button className="bg-transparent">
                        <MoonIcon />
                    </button>
                </div>

                <form className="flex gap-4 items-center overflow-hidden rounded-md py-4 px-4 mt-8 bg-white">
                    <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
                    <input
                        type="text"
                        className="w-full text-gray-400 outline-none"
                        placeholder="Create a new Todo ..."
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <article className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
                    <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
                    <p className="text-gray-400 inline-block grow mx-4">
                        Complete online JavaScript Curse
                    </p>

                    <button>
                        <CrossItem />
                    </button>
                </article>
                

                <section className="bg-white flex gap-4 items-center overflow-hidden rounded-md p-4 border-b mx-auto">
                    <p className="grow text-gray-400"> 5 Items left</p>
                    <p className=" text-gray-400"> Clear completed</p>
                </section>
            </main>

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
            <section className="container mx-auto mt-8 px-4 bg-red-300 flex-grow flex flex-col justify-center">
                <p>Drag and drop to reorder list</p>
            </section>
        </div>
    );
};
export default App;
