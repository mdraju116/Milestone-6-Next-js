import BookType from "@/app/types/bookstype";
import BookCard from "../shared/BookCard";


const getBooks=async():Promise<BookType[]> =>{
    const response = await fetch("http://localhost:3000/data/booksData.json");
    const booksdata = await response.json();
    return booksdata;


}

const Books = async() => {

    const books= await getBooks();

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-20 mb-6">Books</h2>
            
            <div className="grid grid-cols-3 gap-4 container mx-auto px-24 mb-22">

            {
                books.map((book)=> <BookCard key={book.bookId} book={book} /> )
            }
        </div>
        </div>
        
    ); 
};

export default Books;