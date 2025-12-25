import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { dataBase } from '../server/firebase';

export const useRemoveTodo = () => {
    const [isRemoving, setIsRemoving] = useState(false);

    const onRemoveTodo = ({ target }) => {
        setIsRemoving(true);

        const currentTodoId = target.closest('li').id;
        const todoDataBaseRef = ref(dataBase, `todos/${currentTodoId}`);

        remove(todoDataBaseRef)
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setIsRemoving(false));
    };

    return {
        isRemoving,
        onRemoveTodo,
    };
};
