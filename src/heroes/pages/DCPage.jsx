import HeroList from "../components/HeroList";

export const DCPage=()=>{
    
    const publisher = 'DC Comics'

    return(
        <>
        <h3>DC Page</h3>
        <hr/>
        <HeroList publisher = {publisher}/>
        </>
    );
}
export default DCPage;