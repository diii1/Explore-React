import styles from './ProfileCard.module.css';

export default function ProfileCard({user}){
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={user.avatar} alt="avatar" />
            <div className={styles.cardContent}>
                <h4>{user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
            </div>
        </div>
    );
}