
import BookType from "@/app/types/bookstype";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReadButton from "@/app/components/bookdetailsbtn/ReadButton";
import WishlistButton from "@/app/components/bookdetailsbtn/WishlistButton";


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


const SingleBookDetails = async ({ params }: { params: Promise<{ bid: number }> }) => {

    const { bid } = await params;
    const books = await getBooks();

    const book = books.find((book: BookType) => book.bookId === Number(bid));

    if (!book) {
        notFound();
    }

    return (
        <div className="container mx-auto px-24 my-20">
            <div className="card lg:card-side bg-base-100 shadow-sm">

                {/* Book Image */}
                <div className="lg:w-1/2 bg-[#F3F3F3] rounded-lg p-2 flex justify-center items-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={400}
                        height={400}
                        className="h-125 w-auto object-contain"
                    />
                </div>

                {/* Book Details */}
                <div className="lg:w-1/2 card-body">

                    {/* Title */}
                    <h1 className="text-3xl font-bold">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-gray-500">
                        By: {book.author}
                    </p>

                    <hr />

                    {/* Category */}
                    <div>
                        <span className="font-semibold">Category:</span>
                        <span className="ml-2 text-gray-600">
                            {book.category}
                        </span>
                    </div>

                    <hr />

                    {/* Review */}
                    <div>
                        <h3 className="font-semibold mb-2">Review:</h3>
                        <p className="text-gray-600">
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Tags:</span>

                        <span className="badge bg-[#23be0a]/10 text-[#23be0a] border-none">
                            Young Adult
                        </span>

                        <span className="badge bg-[#23be0a]/10 text-[#23be0a] border-none">
                            Identity
                        </span>
                    </div>

                    <hr />

                    {/* Book Information */}
                    <div className="space-y-2">
                        <p className="grid grid-cols-[160px_1fr]">
                            <span className="font-semibold">Number of Pages:</span>
                            <span>{book.totalPages}</span>
                        </p>

                        <p className="grid grid-cols-[160px_1fr]">
                            <span className="font-semibold">Publisher:</span>
                            <span>{book.publisher}</span>
                        </p>

                        <p className="grid grid-cols-[160px_1fr]">
                            <span className="font-semibold">Year of Publishing:</span>
                            <span>{book.yearOfPublishing}</span>
                        </p>

                        <p className="grid grid-cols-[160px_1fr]">
                            <span className="font-semibold">Rating:</span>
                            <span>⭐ {book.rating}</span>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-4 gap-2">
                        <ReadButton book={book} />
                        <WishlistButton book={book} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleBookDetails;