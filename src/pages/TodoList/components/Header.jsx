import styles from './TodoList.module.css';

export default function Header({text}){
    return (
        <div className={styles.navbar}>
            <h2>{text}</h2>
        </div>
    );
}