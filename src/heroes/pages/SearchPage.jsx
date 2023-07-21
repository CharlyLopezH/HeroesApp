import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
export const SearchPage=()=>{

    const navigate= useNavigate();
    
    const location=useLocation();
    //console.log({location});

    const {q=''} = queryString.parse(location.search);
    


    const {searchText, onInputChange } =useForm({
        searchText:''
    });

    const onSearchSubmit=(e)=>{
        e.preventDefault();        
        if (searchText.length <=2) return;  
        navigate(`?q=${searchText}`)
    }

    

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

            <div className="alert alert-primary">
              Buscar uno
            </div>

            <div className="alert alert-danger">
              Sin resultados <b>{q}</b>
            </div>
           
           {/* <HeroCard/> */}

        </div>
        </div>
        </>
    )
}