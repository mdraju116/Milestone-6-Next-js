import BookType from "@/app/types/bookstype";
import BookCard from "../shared/BookCard";
import Link from "next/link";


const getBooks = async (): Promise<BookType[]> => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/booksData.json`);
        const booksdata = await response.json();
        return booksdata;

    }catch (error){
        console.error("Error fetching data:",error);
        return [];
    }
    
}



const PopularBooks = async() => {

    const books= await getBooks();

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-20 mb-6">Popular Books</h2>
            
            <div className="grid grid-cols-3 gap-4 container mx-auto px-24 mb-12">

            {
                books.slice(0,6).map((book)=> <BookCard key={book.bookId} book={book} /> )
            }
            </div>
            <div className="text-center mb-20">
                <Link href={"/bookdetails"}><button className="btn bg-blue-500 hover:bg-[#23be0a] text-white">See All Books</button></Link>
            </div>
        </div>
        
    ); 
};

export default PopularBooks;