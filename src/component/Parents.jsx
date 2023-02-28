import React, { useState, useEffect } from 'react';
import Add from './Add';

const LSKEY = 'MyTodoApp';

const Parents = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAdd = (newValue) => {
        setValue('');
        setTodos([...todos, { text: newValue, checked: false }]);
    };

    const handleToggle = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };

    useEffect(() => {
        localStorage.setItem(LSKEY, JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const localData = localStorage.getItem(LSKEY);
        if (localData) {
        setTodos(JSON.parse(localData));
        }
    }, []);

    return (
        <>
            <Add onAdd={handleAdd} />
            <section className='flex flex-col justify-center pt-4'>
                <h2 className='w-full font-sans text-2xl xl:text-4xl flex flex-col items-center pb-4'>Todo</h2>
                <ul className='flex flex-col pl-5 xl:pl-20'>
                    {todos.map((todo, index) => {
                        const checkedValue = todo.checked ? 'none' : 'flex';
                        return (
                            <li className='w-4/5 m-2 flex flex-row items-center'  key={index} style={{ display: checkedValue }} >
                                <input type='checkbox' className='w-3 xl:w-4 h-3 xl:h-4 rounded-sm bg-blue-100 border-blue-300 text-blue-500 focus:ring-blue-800' checked={todo.checked} onChange={() => handleToggle(index)} />
                                <p className='ml-3 xl:text-2xl'>{todo.text}</p>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
};

export default Parents;
