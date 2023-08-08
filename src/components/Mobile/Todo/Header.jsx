import MoonIcon from "../../icons/moonIcon";

// eslint-disable-next-line react/prop-types
const Header = () => {
    return (
        <header className="container mx-auto pt-9 px-4 mb-8">
            <div className="flex justify-between text-white">
                <h1 className="uppercase text-3xl font-semibold tracking-[0.3em]">
                    Todo
                </h1>

                <button className="bg-transparent">
                    <MoonIcon fill="#fff" />
                </button>
            </div>
        </header>
    );
};

export default Header;
