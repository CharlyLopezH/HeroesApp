import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";
export const SearchPage=()=>{

    const navigate= useNavigate();
    
    const location=useLocation();
    console.log({location});

    const {q=''} = queryString.parse(location.search);
    const heroes = getHeroesByName(q);
    

    const {searchText, onInputChange } =useForm({
        searchText:q
    });

    const onSearchSubmit=(e)=>{
        e.preventDefault();        
        //if (searchText.length <=1) return;  
        navigate(`?q=${searchText}`)
        
    }

    const showSearch=(q.length===0);
    const showError=(q.length>0)&&heroes.length===0;
    

    return (
        <>
        <h2> Buscar heroe</h2>
        <hr/>

        <div className="row">
        <div className="col-5">
            <h4> Buscador...</h4>
            <hr/>
            <form onSubmit={onSearchSubmit}>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Texto de búsqueda..."
                    autoComplete="off"
                    name= "searchText"
                    value={searchText}
                    onChange={onInputChange}
                    >
                </input>
                <button className="btn btn-outline-primary mt-1">
                    Buscar
                </button>
            </form>

        </div>

        <div className="col-7">
            <h4>Resultados</h4>
            <hr/>

            <div className="alert alert-primary" style={{display:showSearch ? '':'none'}}>
              Buscar heroe
            </div>

            <div className="alert alert-danger" style={{display:showError ? '':'none'}}>
              Sin resultados <b>{q}</b>
            </div>
           
           {
            heroes.map(hero=>(
                <HeroCard key={hero.id} {...hero}/>
            ))
           }

        </div>
        </div>
        </>
    )
}