"use client"

import  { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';
import ListedBooksCard from '../components/shared/ListedBooksCard';

const ListedBooksPage = () => {

    const { readBooks, wishListesBooks } = useContext(BooksContext);

    console.log("ReadBooksList", readBooks);


    return (
        <div className='container mx-auto px-24 my-20 '>

            {/* Read Books Tab*/}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-10">
                    {
                        readBooks.length > 0 ? (
                            readBooks.map((book) => {
                                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                            })
                        ) : (
                            <p>
                                No Read Books Found.
                            </p>
                        )
                    }


                </div>


                {/* Wishlist Books Tab*/}
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishListesBooks.length})`} defaultChecked />
                
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-10">
                    {
                        wishListesBooks.length>0 ? (
                            wishListesBooks.map((book)=>{
                                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                            })

                        ):(
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