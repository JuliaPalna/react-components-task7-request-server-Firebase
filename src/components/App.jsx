import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { dataBase } from '../server/firebase';
import { TodoList } from './TodoList';
import { Button } from './Button';
import { SearchTodo } from './SearchTodo';
import { useCreatNewTodo } from '../hooks';
import styles from '../styles/App.module.css';

export const App = () => {
    const [todos, setTodos] = useState([]);
    const [filtredTodos, setFiltredTodos] = useState(todos);
    const [isLoading, setIsLoading] = useState(false);
    const { isCreating, onAddNewTodo } = useCreatNewTodo();

    useEffect(() => {
        setIsLoading(true);

        const todosDataDaseRef = ref(dataBase, 'todos');
        return onValue(todosDataDaseRef, (snapshot) => {
            const loadedTodos = snapshot.val();

            if (loadedTodos) {
                const arrayTodos = Object.entries(loadedTodos).map(
                    ([key, data]) => {
                        return {
                            ...data,
                            id: key,
                        };
                    },
                );

                setTodos(arrayTodos);
            } else {
                setTodos([]);
            }

            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        setFiltredTodos(todos);
    }, [todos]);

    const onSortTodos = () => {
        const sortedTodos = [...todos];
        sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
        setFiltredTodos(sortedTodos);
    };

    return (
        <div className={styles.container}>
            <div className={styles['button-list']}>
                <Button onClick={onSortTodos}>Сортировка по алфавиту</Button>
                <Button onClick={onAddNewTodo} isDisabled={isCreating}>
                    Добавить новую задачу
                </Button>
            </div>

            <div>
                <SearchTodo todos={todos} setFiltredTodos={setFiltredTodos} />
            </div>

            <TodoList
                todos={filtredTodos}
                setTodos={setTodos}
                isLoading={isLoading}
            />
        </div>
    );
};
