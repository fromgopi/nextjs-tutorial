"use client";

import Navigation from "./navigation";

const Header = () => {
    console.log("Header component")
    return (
        <header className="bg-slate-700 text-white p-4 text-center">
            <h1>Welcome to NextJs Tutorial</h1>
            <Navigation/>
        </header>
    )
}

export default Header;