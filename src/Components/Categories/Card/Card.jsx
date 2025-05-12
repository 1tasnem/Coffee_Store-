import { Link, NavLink } from 'react-router';

const Card = ({coffee})=> {
    const {name,image ,id,category,origin,rating,type,popularity} = coffee ||  {}
   // console.log(name)
    return (
        <div>
            <Link to = {`/coffe/${id}`}
            className = 'transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'
            
            >
                <figure className="w-full h-48 overflow-hidden">

                    <img className="" src = {image} alt =''/>
                </figure>
                <div className="p-4">
                    <h1 className="text-xl ">Name:{name}</h1>
                    <p>Category: {category}</p>
                    <p>Type:{type}</p>
                    <p>Origin : {origin}</p>
                    <p>Rating:{rating}</p>
                    <p>Popularity:{popularity}</p>

                </div>




            </Link>
        </div>
    );
};

export default Card;