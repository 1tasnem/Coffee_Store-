//get all coffees from local storage
//add a coffee to local storage
//remove a coffee from local storage 
import toast, { Toaster } from 'react-hot-toast';
 const getAllFavorite = () =>{
    
     const all = localStorage.getItem('favorites')
        if(all) {
            const favorites = JSON.parse(all)
            console.log(favorites)
            return favorites;
        }
    else
    {
        console.log([])
        return[];
    }
 }

const addFavorite = coffee =>{
    //console.log(coffee);
    const favorites = getAllFavorite();
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist) return toast.error('Coffe already exits!');
    favorites.push (coffee)
    localStorage.setItem('favorites',JSON.stringify(favorites))
    toast.success('Successfully Added!');
}

const removeFavorite = id =>{
    const favorites =getAllFavorite()
    const remaining = favorites.filter(coffee =>coffee.id != id)
 localStorage.setItem('favorites',JSON.stringify(remaining))
    toast.success('Successfully Removed!');
}
export {addFavorite,getAllFavorite,removeFavorite}