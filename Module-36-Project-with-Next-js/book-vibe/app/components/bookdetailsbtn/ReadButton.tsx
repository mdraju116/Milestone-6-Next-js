
"use client"
import { BooksContext } from "@/app/context/BooksContext";
import BookType from "@/app/types/bookstype";
import { useContext } from "react";
import { toast } from "react-toastify";


const ReadButton = ({book}:{book:BookType}) => {

    const {readBooks,setReadBooks} =useContext(BooksContext);

    const handleReadBooks = ()=>{
        setReadBooks([...readBooks,book]);
        toast.success(`You have read "${book.bookName}".`)
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