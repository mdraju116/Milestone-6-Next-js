/* 
loading=>  bookvibe/loading.tsx,    (Gloabal)
           bookdetails/loading.tsx ,   (2nd Nearest)
           bookdetails/[bid]/loading.tsx (1st Nearest)



Sorting:
=>listedbooks/page.tsx

"use client"

import { useContext, useState } from 'react';
import { BooksContext } from '../context/BooksContext';
import ListedBooksCard from '../components/shared/ListedBooksCard';
import BookType from '../types/bookstype';

const ListedBooksPage = () => {
    const { readBooks, wishListesBooks } = useContext(BooksContext);
    // console.log("ReadBooksList", readBooks);


//sorting state and function
    const [sortby, setSortby] =useState <"rating" |"pages" | "year">("rating");
    const sortBooks =(books:BookType[])=>{
        const sortedBooks = [...books];

        if(sortby === "rating"){
           sortedBooks.sort((a, b) => b.rating - a.rating);
        }else if(sortby === "pages"){
           sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }else if(sortby === "year"){
           sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;

    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlistBooks = sortBooks(wishListesBooks);




    return (
        <div className='container mx-auto px-24 my-8 '>

            <h2 className='font-bold text-xl text-center bg-base-300 shadow-sm py-15 mb-10'>Listed Books</h2>






            /* Sorting 
            <div className='text-center '>
                
                <select 
                    value={sortby}
                    onChange={(e)=> setSortby(e.target.value as "rating" |"pages" | "year")}
                    defaultValue="Pick a Runtime" 
                    className="select select-success "
                    >
                    <option disabled={true} >Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Publishing Year</option>
                </select>

           </div>      





            /* Tabs 
            /* ReadBooks Tab
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />

                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-10">
                    {
                        sortedReadBooks.length > 0 ? (
                            sortedReadBooks.map((book) => {
                                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                            })
                        ) : (
                            <p>
                                No Read Books Found.
                            </p>
                        )
                    }


                </div>


                /* Wishlist Books Tab
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishListesBooks.length})`} defaultChecked />

                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-10">
                    {
                        sortedWishlistBooks.length > 0 ? (
                            sortedWishlistBooks.map((book) => {
                                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                            })

                        ) : (
                            <p>
                                No Wishlisted Books Found.
                            </p>
                        )
                    }


                </div>


            </div>
        </div>
    );
};

export default ListedBooksPage;




*/