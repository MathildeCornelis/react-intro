import React, {useState} from 'react';

const List = () => {
    const initialTodos = ['abc', 'def', 'ghi', 'jkl'];
    const [todos, setTodos] = useState(initialTodos);

    
    const [checked, setchecked] = useState(false);
    const checkedValue = checked ? 'none' : 'flex';

    return (
        <section className='flex flex-col justify-center pt-4'>
            <h2 className='w-full font-sans text-2xl xl:text-4xl flex flex-col items-center pb-4'>Todo</h2>
            <ul className='flex flex-col pl-5 xl:pl-20'>
                {todos.map((todo, index) => {
                    console.log(index);
                    return(
                        <li className='w-4/5 m-2 flex flex-row items-center' key={index} style={{ display: checkedValue}}>
                            <input type="checkbox"  className='w-3 xl:w-4 h-3 xl:h-4 rounded-sm bg-blue-100 border-blue-300 text-blue-500 focus:ring-blue-800' 
                                onChange={() => {
                                    useState
                                }} 
                                onClick={() => setchecked(!checked)}
                            />
                            <p className='ml-3 xl:text-2xl'>{todo}</p>
                        </li>
                        
                    )
                })}
            </ul>
        </section>
    );
};

export default List;