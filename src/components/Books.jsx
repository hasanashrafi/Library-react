import React, { useState } from 'react';

import BookCard from './BookCard';
import { books as bookData } from '../constants/mockData';

import SideBar from './SideBar';

import styles from "./Books.module.css"
import SearchBox from './SearchBox';

function Books() {
    const [books, setBooks] = useState(bookData)
    const [liked, setLiked] = useState([])
    const [search, setSearch] = useState([])

    const handleLikedList = (book, status) => {
        if (status) {
            const newLiked = liked.filter((i) => i.id !== book.id)
            setLiked(newLiked)
        } else {
            setLiked(liked => [...liked, book])
        }
    }
    const searchHandler = () => {
        if (search) {
            const newBooks = bookData.filter((book) =>
                book.title.toLowerCase().includes(search))
            setBooks(newBooks)
        } else {
            setBooks(bookData)
        }
    }
    return (
        <>
            <SearchBox searchHandler={searchHandler} search={search} setSearch={setSearch} />
            <div className={styles.container}>
                <div className={styles.cards}>
                    {books.map((book) => (
                        <BookCard key={book.id} data={book} handleLikedList={handleLikedList} />
                    ))}
                </div>
                {
                    !!liked.length &&
                    <div className={styles.favorite}>
                        <h4>Favorite</h4>
                        {liked.map((book) =>
                            <SideBar key={book.id} data={book} />)
                        }
                    </div>
                }
            </div>
        </>
    );
}

export default Books;
