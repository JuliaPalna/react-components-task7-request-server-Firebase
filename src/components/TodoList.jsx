import { ListItem } from './ListItem';
import styles from '../styles/todoList.module.css';

export const TodoList = ({ todos, setTodos, isLoading }) => {
    return (
        <>
            <h1 className={styles.title}>Список дел</h1>

            <ul className={styles.list}>
                {isLoading ? (
                    <p className={styles.center}>Загрузка...</p>
                ) : todos.length === 0 ? (
                    <p className={styles.center}>Задач нет</p>
                ) : (
                    Object.entries(todos).map(([id, { title }]) => {
                        return (
                            <li
                                key={id}
                                id={id}
                                className={styles['list_item']}
                            >
                                <ListItem
                                    id={id}
                                    setTodos={setTodos}
                                    title={title}
                                />
                            </li>
                        );
                    })
                )}
            </ul>
        </>
    );
};
