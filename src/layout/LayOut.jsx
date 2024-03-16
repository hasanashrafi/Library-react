import styles from "./LayOut.module.css"
function LayOut({ children }) {

    return (
        <>
            <header className={styles.header} >
                <h3>Book App</h3>
                <p><a href="#">HsN.DeV</a></p>
            </header>

            {children}

            <footer className={styles.footer}>
                <p>Developed By HsN.DeV</p>
            </footer>
        </>
    );
}

export default LayOut;
