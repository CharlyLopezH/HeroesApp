export const HeroCard=({id,superhero,publisher, alter_ego,first_appearance,characters} )=>{

    const heroImageURL=`/assets/heroes/${id}.jpg`;

    return(
        <>
        <div  className = "col ">     
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageURL} className="card-img" alt={superhero	} >
                        </img>
                    </div>

                </div>
            </div>                       
        </div>
        </>
    )
}
export default HeroCard;