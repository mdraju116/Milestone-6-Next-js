
"use client"
import { BooksContext } from "@/app/context/BooksContext";
import BookType from "@/app/types/bookstype";
import { useContext } from "react";


const ReadButton = ({book}:{book:BookType}) => {

    const {readBooks,setReadBooks} =useContext(BooksContext);

    const handleReadBooks = ()=>{
        setReadBooks([...readBooks,book]);
        alert("Book added to readbooks successfully.")
    }

    return (
        <div>
            <button className="btn btn-outline" onClick={()=> {handleReadBooks()}}>
                    Read
            </button>
        </div>
    );
};

export default ReadButton;