import { Link, NavLink, useLocation } from 'react-router';
import { FaRegTrashAlt } from "react-icons/fa";


const Card = ({coffee,handleRemove})=> {
    const location = useLocation();
const { pathname } = location;
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
            {pathname === '/dashboard' && (<div onClick={()=>handleRemove(id)} className='flex font-bold justify-center bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-red-500 hover:text-white transition'><FaRegTrashAlt size={20} />Delete</div>)}
        </div>
    );
};

export default Card;