"use client";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {

    const { isLoaded, userId } = useAuth();
    const [count, setCount] = useState(0);

    if (!isLoaded || !userId) {
        return null;
    }

    return(
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    )
}