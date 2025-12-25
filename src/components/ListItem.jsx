import { useState } from 'react';
import { Button } from './Button';
import { useRemoveTodo, useUpdateTodos } from '../hooks/';
import styles from '../styles/listItem.module.css';

export const ListItem = ({ title }) => {
    const [valueTodo, setValueTodo] = useState(title);
    const { isRemoving, onRemoveTodo } = useRemoveTodo();
    const { stateUpdeting, setStateUpdeting, onUpdateTodos } = useUpdateTodos();

    const onChangeValue = ({ target }) => {
        setValueTodo(target.value);
    };

    const onClickUpdeting = ({ target }) => {
        if (stateUpdeting === 'save') {
            onUpdateTodos({ target, valueTodo });
        } else if (stateUpdeting === 'edit') {
            setStateUpdeting('save');
        }
    };

    const getNameButton = () => {
        switch (stateUpdeting) {
            case 'pending':
                return 'Отправка...';
            case 'save':
                return 'Сохранить';
            case 'edit':
            default:
                return 'Редактировать';
        }
    };

    return (
        <>
            {stateUpdeting !== 'edit' ? (
                <input
                    type="text"
                    name="newTodo"
                    placeholder="Введите новое дело..."
                    value={valueTodo}
                    onChange={onChangeValue}
                    min={3}
                    max={20}
                    className={styles.input}
                />
            ) : (
                <p>{valueTodo}</p>
            )}

            <div className={styles['button-list']}>
                <Button
                    size="smal"
                    onClick={onClickUpdeting}
                    isDisabled={stateUpdeting === 'pending'}
                >
                    {getNameButton()}
                </Button>

                <Button
                    size="smal"
                    onClick={onRemoveTodo}
                    isDisabled={isRemoving}
                >
                    Удалить
                </Button>
            </div>
        </>
    );
};
