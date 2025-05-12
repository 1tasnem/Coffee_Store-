import React from 'react';
import { Link, NavLink } from 'react-router';

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-box flex justify-center gap-60 font-bold">
    {categories.map((category => (
  <NavLink
    key={category.category}
    to={`/category/${category.category}`}
    role="tab"
    className={({isActive})=>` text-2xl font-thin ${isActive?'tab-active' : '' }`}
  >
    {category.category}
  </NavLink>
)))}
</div>
    );
};

export default Categories;