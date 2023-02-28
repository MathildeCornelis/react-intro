import React, {useRef} from 'react';

const Add = ({onAdd}) => {
    const inputRef = useRef();

    const clickHandler = () => {
        const inputElement = inputRef.current.value;
        onAdd(inputElement);
        inputRef.current.value = '';
    }
    return (
        <form className='flex flex-col items-start xl:items-center p-5 font-sans text-l border-b-2 border-black border-opacity-20'>
            <label htmlFor="" className='w-1/2 flex justify-start xl:justify-center pl-2 pt-2 pb-2 xl:text-3xl'>Write a new task</label>
            <input type="text" placeholder=' ...' ref={inputRef} className='w-1/2  flex justify-start ml-2 mt-2 mb-2 xl:text-2xl bg-gray-100 text-black border border-blue-100 rounded-md p-0'/>
            <input type="button" value="Add" onClick={clickHandler} className='w-1/5 xl:w-1/2 flex justify-center ml-2 mt-2 mb-2 pt-0.5 pb-0.5 xl:text-2xl rounded-md bg-blue-800 text-gray-100'/>
        </form>
    );
};



export default Add;