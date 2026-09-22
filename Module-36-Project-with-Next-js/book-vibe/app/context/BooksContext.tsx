"use client"

import { ReactNode, useState } from "react";
import { createContext } from "react";
import BookType from "../types/bookstype";

interface BookContextProps{
    readBooks:BookType[],
    setReadBooks:React.Dispatch<React.SetStateAction<BookType[]>>,
    
    
}

export const BooksContext =createContext <BookContextProps>({
    readBooks:[],
    setReadBooks: () => {},

})



const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks]=useState<BookType[]>([]);

    const sharedData={
        readBooks,setReadBooks,

    }


    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;