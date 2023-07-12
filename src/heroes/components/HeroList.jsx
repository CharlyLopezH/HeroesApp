import getHeroesByPublisher from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";

export const HeroList=({publisher})=>{

    console.log('Filtraré por '+publisher);

    const heroList = getHeroesByPublisher(publisher).map(item=>(<HeroCard key={item.id} 
                                                                              {...item }/>)); 

return (
    <div>
        <h3>Listado de Heroes (By {publisher})</h3>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroList
            }            
        </div>
    </div>
);

}
export default HeroList;