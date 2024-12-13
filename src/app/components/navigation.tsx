"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathName = usePathname();
    console.log(pathName);
    return(
        <nav>
            <Link href="/" className={pathName === "/" ? "font-bold mr-4" : "mr-4 text-blue-400"}>Home</Link>
            <Link href="/about" className={pathName === "/about" ? "font-bold mr-4" : "mr-4 text-blue-400"}>About</Link>
            <Link href="/products/1" className={pathName === "/products/1" ? "font-bold mr-4" : "mr-4 text-blue-400"}>Product 1</Link>
        </nav>
    );

}

export default Navigation;