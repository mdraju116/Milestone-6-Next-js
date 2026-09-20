"use client";
import { createContext } from "react";

type UserContextType = {
    name: string;
};

export const UserContext = createContext<UserContextType>({
             name: "",
});

const UserProvider = ({ children, }: { children: React.ReactNode; }) => {

    const user = {
        name: "Raju",
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;