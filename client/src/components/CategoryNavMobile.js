import React from 'react';

import {FiX} from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatnavMobile }) => {
    const {data} = useFetch('/categories');
    return (
        <div className='w-full hf bg-primary p-8 '>
            <div 
            onClick={() => setCatnavMobile(false)}
            className='flex justify-end mb-8 cursor-pointer'>
                <FiX className='text-3xl'/>
            </div>
            <div className='flex flex-col gap-y-8'>
            {data?.map(category =>{
                return <Link to={`products/${category.id}`}
                className='uppercase font-medium' 
                key={category.id}>
                    {category.attributes.title} Phones
                    </Link>;
            })}
            </div>
        </div>
    );
};

export default CategoryNavMobile;