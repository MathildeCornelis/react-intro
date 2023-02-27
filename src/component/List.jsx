import React from 'react';

const List = () => {
    return (
        <section className='flex flex-col justify-center pt-4'>
            <h2 className='w-full font-sans text-2xl xl:text-4xl flex flex-col items-center pb-4'>Todo</h2>
            <ul className='flex flex-col pl-5 xl:pl-20'>
                <li className='w-4/5 m-2 flex flex-row items-center'>
                    <input type="checkbox" name="" id="" className='w-3 xl:w-4 h-3 xl:h-4 rounded-sm bg-blue-100 border-blue-300 text-blue-500 focus:ring-blue-800' />
                    <p className='ml-3 xl:text-2xl'>abc</p>
                </li>
                <li className='w-4/5 m-2 flex flex-row items-center'>
                    <input type="checkbox" name="" id="" className='w-3 xl:w-4 h-3 xl:h-4 rounded-sm bg-blue-100 border-blue-300 text-blue-500 focus:ring-blue-800' />
                    <p className='ml-3 xl:text-2xl'>def</p>
                </li>
                <li className='w-4/5 m-2 flex flex-row items-center'>
                    <input type="checkbox" name="" id="" className='w-3 xl:w-4 h-3 xl:h-4 rounded-sm bg-blue-100 border-blue-300 text-blue-500 focus:ring-blue-800' />
                    <p className='ml-3 xl:text-2xl'>ghi</p>
                </li>
            </ul>
        </section>
    );
};

export default List;