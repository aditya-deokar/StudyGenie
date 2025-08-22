"use client";


import Image from 'next/image';
import React, { useContext } from 'react';


import { UserInputContext } from '../../_context/userInputContext';
import CategoryList from '../../_shared/CategoryList';
import { CategoryItem } from '@/types/types';


const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category: string) => {
    setUserCourseInput(prev => ({
      ...prev,
      category: category
    }));
  };

  return (
    <div className='px-10 md:px-20'>
      <h2 className=' font-medium -my-1.5'>Select Course Category</h2>
      <div className='grid grid-cols-3 gap-10 mt-4'>

        {
          CategoryList.map((item: CategoryItem, index) => (
            <div
              key={index}
              onClick={() => handleCategoryChange(item.name)}
              className={`flex flex-col p-5 border items-center rounded-xl hover:border-black hover:bg-secondary cursor-pointer
                    ${userCourseInput?.category == item.name && "border-black bg-secondary"}`}>
              <Image src={item.icon} width={50} height={50} alt={item.name} />
              <h3 className='font-medium'>{item.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SelectCategory;