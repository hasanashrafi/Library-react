import { useState } from "react";
import { PiHeartStraightFill } from "react-icons/pi";

import styles from "./BookCard.module.css"

function BookCard({ data, handleLikedList }) {
    const { title, image, year, author, language, country, pages, link } = data
    const [like, setLike] = useState(false)

    const likeHandler = () => {
        handleLikedList(data,like)
        setLike((like) => !like)
    }

    return (
        <div className={styles.card}>
            <img src={image} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>Language: {language}</span>
                    <span>Pages: {pages} </span>
                    <span>Country: {country}</span>
                    <span>Year: {year}</span>
                </div>

            </div>
            <a href={link}>Read</a>
            <button onClick={likeHandler}><PiHeartStraightFill color={like ? "red" : "#BFCFE7"} /></button>
        </div>
    );
}

export default BookCard;
