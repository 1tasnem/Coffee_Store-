import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import pic from '../../assets/nutrition.png'
import { addFavorite,getAllFavorite } from '../Utils';

const CoffeeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [coffee,setCoffee] = useState({})
    const [isFavorite,setIsFavorite] = useState(false)
    useEffect (() => {
        const singleData = data.find(coffee => coffee.id == parseInt(id))
        setCoffee(singleData)
        const favorites = getAllFavorite();
        const isExist = favorites.find(item => item.id == singleData.id)
        if(isExist)
        {
            setIsFavorite(true)
        }
    },[data,id])

     //console.log(coffee)
     const {
        name ,
        image,
        ingredients,
        nutrition_info,
        description,
        making_process,
        rating ,
        popularity,

     } = coffee 
     const handleFavorite = coffee =>
     {
       addFavorite(coffee)
        setIsFavorite(true)
     }


    return (
        <div className='my-12'>
            <h1 className='text-2xl md:text-4xl font-thin mb-6'>{description}</h1>
            <div className='w-full h-full md:h-[500px] object-cover overflow-hidden'>
                <img className='w-full h-full' src={image} alt=''></img>
            </div>
            <div className='flex justify-between items-center my-6'>
                <div>
                    <h1  className='text-2xl md:text-3xl font-thin'>{name}</h1>
                    <p className='text-base'>Popularity:{popularity}</p>
                    <p className='text-base'>Rating:{rating}</p>
                </div>
                <div>
                    
                    <button disabled = {isFavorite}
                    onClick = {() => handleFavorite(coffee)} className='btn btn-warning'>Add Favorite </button>
                </div>

            </div>
            <div className='my-6'>
                <h2 className='text-2xl'>Making Process:</h2>
                <p className='text-base'>{making_process}</p>

            </div>
            <div className='my-6 flex justify-between items-center'>
                <div className='flex-1'>
                <div className='flex flex-col justify-center gap-6'>
                    <h1 className='text-2xl font-thin'>Ingredients</h1>
                    <ul className='text-xl ml-12'>
{ingredients && ingredients.map(i => (
   <li className='list-disc' key={i}>{i}</li>
))}
                    </ul>
                <h1 className='text-2xl font-thin'> Nutrition:</h1>
                <ul className='text-xl ml-12'>
                    {nutrition_info && Object.keys(nutrition_info).map(n => (
                        <li className='list-disc' key={nutrition_info[n]}>
                            {n}:{nutrition_info[n]}
                        </li>
                    ))}
                </ul>
                </div>

            </div>
            <div className='flex-1'>
           <img src={pic} alt =''/>
            </div>
         </div>
         </div>
    );
};

export default CoffeeDetails;