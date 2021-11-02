import styles from './TodoList.module.css';

export default function TodoList({list}){
    return (
        <div className={styles.box}>
            {list.map( (item) => (
                <div className={styles.boxList} key={item.id} style={item.completed ? {textDecoration: "line-through"} : null}>
                    {item.title}
                </div>
            ))}
        </div>
    );
}