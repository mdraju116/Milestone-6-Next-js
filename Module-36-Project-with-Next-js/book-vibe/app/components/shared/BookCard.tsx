import BookType from "@/app/types/bookstype";
import Image from "next/image";

interface BooksProps {
    book: BookType,
}


const BookCard = ({ book }: BooksProps) => {
    return (
       <div className="bg-base-100 rounded-xl p-5 shadow-[0_0_15px_2px_rgba(0,0,0,0.10)]">

            {/* Book Image */}
            <div className="bg-[#F3F3F3] rounded-lg p-8 h-72 flex justify-center items-center">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={100}
                    height={200}
                    className="h-full w-auto object-contain"
                />
            </div>

            {/* Badges */}
            <div className="flex  justify-between items-center gap-1  mt-5">
                {/* <span className="badge badge-success  badge-soft">
                 */}
                <span className="badge bg-[#23be0a]/8 text-[#1cd400] border-none">
                    Young Adult
                </span>

                <span className="badge bg-[#23be0a]/8 text-[#1cd400] border-none">
                    Identity
                </span>
            </div>

            {/* Book Name */}
            <h2 className="text-xl font-bold mt-4">
                {book.bookName}
            </h2>

            {/* Author */}
            <p className="text-gray-500 mt-2">
                By: {book.author}
            </p>

            {/* Dashed HR */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Category & Rating */}
            <div className="flex justify-between items-center text-gray-600">
                <span className="font-mediu">{book.category}</span>

                <span className="flex items-center gap-1">
                    {book.rating}
                    <span>⭐</span>
                </span>
            </div>
        </div>


    );
};

export default BookCard;