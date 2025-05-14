import React, { useEffect, useState } from 'react';
import Heading  from '../Heading/Heading';
import { getAllFavorite, removeFavorite } from '../Utils';
import Card from '../../Components/Categories/Card/Card'

const Dashboard = () => {
    const [coffees,setCoffees] = useState([])
    useEffect (()=>{
        const favorites = getAllFavorite();
        setCoffees(favorites);




    },[])
    const handleRemove = id =>{
        removeFavorite(id)
        const favorites = getAllFavorite();
        setCoffees(favorites);
    }
    return (
       <>
        <Heading 
        title = 'Welcome to Dashboard'
        subtitle = 'Manage coffes that you have preciously added as favoriteyou can view or remove them from here '/>
       
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
           {coffees.map(coffee => (
        <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
      ))}
      
      </div>    
      
       </>

       
    );
};

export default Dashboard;