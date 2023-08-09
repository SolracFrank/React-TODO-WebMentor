import MoonIcon from "../../icons/moonIcon";
import SunIcon from "../../icons/sunIcon";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = () => {
    const initialState = localStorage.getItem("theme").toString() || [];

    const [theme, setTheme] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    function HandleClickToggleTheme() {
        let selectTheme = theme;
        selectTheme = selectTheme == "light" ? "dark" : "light";
        setTheme(selectTheme);
        window.location.reload();
    }
    return (
        <header className="container mx-auto pt-9 px-4 mb-8">
            <div className="flex justify-between text-white">
                <h1 className="uppercase text-3xl font-semibold tracking-[0.3em]">
                    Todo
                </h1>

                <button
                    className="bg-transparent"
                    onClick={HandleClickToggleTheme}
                >
                    {theme == "light" && <MoonIcon fill="#fff" />}
                    {theme == "dark" && <SunIcon fill="#fff" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
