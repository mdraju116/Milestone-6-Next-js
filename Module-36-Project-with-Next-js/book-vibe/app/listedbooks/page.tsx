"use client"

import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const ListedBooksPage = () => {

    const {readBooks}=useContext(BooksContext);

    console.log("ReadBooksList",readBooks);

    return (
        <div>
            Listed Books
        </div>
    );
};

export default ListedBooksPage;