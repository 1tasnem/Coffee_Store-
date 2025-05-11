import React from 'react';
import Banner from '../Banner/Banner';
import Heading from '../Heading/Heading';
import { Outlet, useLoaderData } from 'react-router';
import Categories from '../Categories/Categories';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div>
            <Banner></Banner>
               <Heading title ={'Browse Coffes by Category'} subtitle={'choose your desired category to browser through specific coffees that fit in your taste.'}></Heading>
           <Categories categories={categories}></Categories>
           <Outlet></Outlet>
</div>
    );
};

export default Home;