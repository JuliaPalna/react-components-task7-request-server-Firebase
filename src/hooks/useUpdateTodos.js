import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { dataBase } from '../server/firebase';

export const useUpdateTodos = () => {
    const [stateUpdeting, setStateUpdeting] = useState('edit');

    const onUpdateTodos = ({ target, valueTodo }) => {
        setStateUpdeting('pending');

        const currentTodo = target.closest('li');
        const currentTodoId = currentTodo.id;

        const todoDataBaseRef = ref(dataBase, `todos/${currentTodoId}`);

        set(todoDataBaseRef, {
            title: valueTodo,
        })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setStateUpdeting('edit'));
    };

    return {
        stateUpdeting,
        setStateUpdeting,
        onUpdateTodos,
    };
};
