import { heroes } from "../data/heroes";

export const getHeroesByPublisher=(publisher)=>{

    console.log('Entrando a la función');
    
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} No está en la lista valida de publishers`);
    }

    return heroes.filter(x=>x.publisher===publisher);
}
export default getHeroesByPublisher;