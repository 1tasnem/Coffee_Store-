import { useLoaderData,useNavigate,useParams} from "react-router";
import Card from '../../Components/Categories/Card/Card'
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
   const { category } = useParams();
       // console.log(data)
       const [coffes ,setCoffees] = useState([]);
       useEffect (() => {
        if(category){
        const fillteredByCategory = [...data].filter(
            coffee => coffee.category === category
        )
        setCoffees(fillteredByCategory)
    }
        else{
            setCoffees(data .slice(0,6));
        }
       },[category,data])
    return (
        <>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 ">
           {coffes.map(coffee => (
        <Card key={coffee.id} coffee={coffee} />
      ))}

        </div>
        <button className="btn btn-warning "  onClick={() => navigate('/coffe')}>View All</button> 
        </>
    );
};

export default CoffeeCard;