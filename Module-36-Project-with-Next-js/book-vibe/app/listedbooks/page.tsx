"use client"

import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const ListedBooksPage = () => {

    const {readBooks,wishListesBooks}=useContext(BooksContext);

    console.log("ReadBooksList",readBooks);


    return (
        <div className='text-center'>
            <h2>No of Readed Books: {readBooks.length}</h2>
            <h2>No of WishListed Books: {wishListesBooks.length}</h2>
        </div>
    );
};

export default ListedBooksPage;