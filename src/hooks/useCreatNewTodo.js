import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { dataBase } from '../server/firebase';

export const useCreatNewTodo = () => {
    const [isCreating, setIsCreating] = useState(false);

    const onAddNewTodo = () => {
        setIsCreating(true);

        const todosDataBaseRef = ref(dataBase, 'todos');

        push(todosDataBaseRef, {
            title: 'Новая задача',
        })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setIsCreating(false));
    };

    return {
        isCreating,
        onAddNewTodo,
    };
};
