import styles from './SideBar.module.css';

function SideBar({ data }) {
    const { image, title } = data;
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
}

export default SideBar;
