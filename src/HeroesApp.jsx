import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp=()=>{
    return(
        <>
        <h1>Heroes App</h1>
        <AuthProvider>
           <AppRouter/>      
        </AuthProvider>           
        </>
    )    
}
export default HeroesApp;