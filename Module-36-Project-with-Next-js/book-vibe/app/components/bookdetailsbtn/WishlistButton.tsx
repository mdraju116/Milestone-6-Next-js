
"use client"
import { BooksContext } from '@/app/context/BooksContext';
import BookType from '@/app/types/bookstype';
import { useContext } from 'react';


const WishlistButton = ({book}:{book:BookType}) => {

    const {wishListesBooks,setWishListedBooks}=useContext(BooksContext);

    const handleWishListedBooks =()=>{
        setWishListedBooks([...wishListesBooks, book]);
        alert(`You have added "${book.bookName}" to your wishlist.`)
    }

    return (
        <div>
            <button className="btn btn-accent text-white" onClick={()=>{handleWishListedBooks()}}>
                            Add to Wishlist
         </button>
        </div>
    );
};

export default WishlistButton;