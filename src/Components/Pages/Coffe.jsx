import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Categories/Card/Card';

const Coffe = () => {
    const data = useLoaderData();
    const [coffees,setCoffees] = useState(data);

  
    const handleSort =( sortBy) =>
      {
          

      if(sortBy == 'popularity')
      {
        const sorted = [...coffees].sort((a,b) => b.popularity - a.popularity)
          setCoffees(sorted)
      }

    
    else if(sortBy == 'rating')
    {    const sorted = [...coffees].sort((a,b) => b.rating - a.rating )
            setCoffees(sorted)
    }
    
  };
//console.log(coffees)
  
    return (
      <>
      <div className='flex justify-between items-center my-12'>
        <div>
          <h1 className='text-3xl font-thin'>Soet Coffee by Popularity & Rating</h1>
        
        </div>
        <div className='space-x-4'>
          <button onClick={() => handleSort('popularity')} className='btn btn-warning'>Sort By Popularity</button>
          <button onClick={() => handleSort('rating')} className='btn btn-warning'>Sort By Rating</button>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
           {coffees.map(coffee => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
      
      </div>
      </>
    );
};

export default Coffe;