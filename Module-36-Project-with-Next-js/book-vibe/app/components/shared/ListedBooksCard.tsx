import BookType from "@/app/types/bookstype";
import Link from "next/link";
import Image from "next/image";
import { UserRound, BookOpen, CalendarDays, LocationEditIcon, LocateIcon } from "lucide-react";

const ListedBooksCard = ({ book }: { book: BookType }) => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">

                {/* Book Image */}
                <div className="lg:w-1/3 bg-[#F3F3F3] rounded-lg p-2 flex justify-center items-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={200}
                        height={200}
                        className="h-50 w-auto object-contain"
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

                    {/* Tags + Year */}
                    <div className="flex flex-wrap items-center gap-3">

                        <span className="font-semibold">
                            Tags:
                        </span>

                        <span className="badge bg-[#23be0a]/10 text-[#23be0a] border-none">
                            #Young Adult
                        </span>

                        <span className="badge bg-[#23be0a]/10 text-[#23be0a] border-none">
                            #Identity
                        </span>

                        <div className="flex items-center gap-1 ml-2">
                            <LocateIcon size={18} />
                            <span>
                                Year of Publishing: {book.yearOfPublishing}
                            </span>
                        </div>

                    </div>

                    {/* Publisher + Pages */}
                    <div className="flex flex-wrap items-center gap-6">

                        <div className="flex items-center gap-1">
                            <UserRound size={18} />
                            <span>
                                Publisher: {book.publisher}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <BookOpen size={18} />
                            <span>
                                Pages: {book.totalPages}
                            </span>
                        </div>

                    </div>

                    <hr />

                    {/* Category + Rating + Button */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Category */}
                        <span className="font-semibold badge bg-[#282bdd]/10 text-[#1631c9] border-none">
                            Category: {book.category}
                        </span>

                        {/* Rating */}
                        <span className="font-semibold badge bg-[#c99d0c]/10 text-[#c99d0c] border-none">
                            Rating:  {book.rating}
                        </span>

                        {/* View Details */}
                        <Link
                            href={`/bookdetails/${book.bookId}`}
                            className="btn rounded-xl  bg-green-500 text-white hover:bg-blue-600"
                        >
                            View Details
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;