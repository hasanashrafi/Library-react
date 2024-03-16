import { IoSearch } from "react-icons/io5";

import styles from "./SearchBox.module.css"

function SearchBox({ search, setSearch,searchHandler }) {
    return (
        <div className={styles.search}>
            <input
                type='text'
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())} />
            <button onClick={searchHandler}><IoSearch /></button>
        </div>
    );
}

export default SearchBox;
