"use client";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathName = usePathname();
    return(
        <nav className="flex justify-center items-center p-4">
            <Link href="/" className={pathName === "/" ? "font-bold mr-4" : "mr-4 text-blue-400"}>Home</Link>
            <Link href="/about" className={pathName === "/about" ? "font-bold mr-4" : "mr-4 text-blue-400"}>About</Link>
            <SignedOut>
                <SignInButton mode="modal"/>
            </SignedOut>
            
            <SignedIn>
                <UserButton/>
            </SignedIn>
            
        </nav>
    );

}

export default Navigation;