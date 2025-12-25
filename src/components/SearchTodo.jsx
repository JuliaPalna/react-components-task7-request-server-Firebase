import { Button } from './Button';
import { useSearchTodo } from '../hooks/useSearchTodo';
import styles from '../styles/searchTodo.module.css';

export const SearchTodo = ({ todos, setFiltredTodos }) => {
    const { searchValue, onReset, onSearch, onChange } = useSearchTodo({
        todos,
        setFiltredTodos,
    });

    return (
        <div className={styles.container}>
            <label htmlFor="search">Поиск:</label>
            <input
                type="text"
                name="search"
                placeholder="Введите строку поиска..."
                value={searchValue}
                onChange={onChange}
                className={styles.input}
            />

            <div className={styles['button-list']}>
                <Button onClick={onSearch}>Поиск</Button>
                <Button onClick={onReset}>Отмена</Button>
            </div>
        </div>
    );
};
