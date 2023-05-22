import React from 'react';

import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RelatedProducts from '../components/RelatedProducts';

const ProductDetails = () => {
  const {id} = useParams();
  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return <div className='container mx-auto'>Loading...</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
          <div className='flex-1 lg:max-w-[45%] lg:h-[450px] grad rounded-lg flex justify-center item-center'>
            <img 
            src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} 
            alt=''
            className='w-full max-w-[65%]'
            />
          </div>
          <div className='flex-1 bg-primary p-12 x1:p-20 rounded-lg flex flex-col justify-center'>
            {/*  category title */}
            <div className='uppercas text-accent text-lg font-medium mb-2'>
              {data[0].attributes.categories.data[0].attributes.title} 
            </div>
            {/* title */}
            <h2 className='h2 mb-4 '>
              {data[0].attributes.title}
            </h2>
            {/* deskripsi */}
            <p className='mb-12 '>
              {data[0].attributes.description}
            </p>
            <div className='flex items-center gap-x-8'>
                          {/* harga dan tombol */}
            <div className='text-3xl text-accent fonts-semibold'>
              Rp. {data[0].attributes.price}
            </div>
            <a href="https://wa.me/6281329929950">
            <button className='btn btn-accent'>Tanyakan Stok</button>
            </a>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle}/>
      </div>
    </div>
  );
};

export default ProductDetails;