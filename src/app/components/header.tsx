"use client";

import Navigation from "./navigation";

const Header = () => {
    console.log("Header component")
    return (
        <header className="bg-slate-700 text-white p-4 text-center">
            
            <Navigation/>
        </header>
    )
}

export default Header;