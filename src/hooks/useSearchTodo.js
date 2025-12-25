import { useState } from 'react';

export const useSearchTodo = ({ todos, setFiltredTodos }) => {
    const [searchValue, setSearchValue] = useState('');

    const onChange = ({ target }) => {
        setSearchValue(target.value);
    };

    const onSearch = () => {
        const filtredTodos = todos.filter(({ title }) => {
            return title.includes(searchValue);
        });

        setFiltredTodos(filtredTodos);
    };

    const onReset = () => {
        setSearchValue('');
        setFiltredTodos(todos);
    };

    return {
        searchValue,
        onReset,
        onSearch,
        onChange,
    };
};
