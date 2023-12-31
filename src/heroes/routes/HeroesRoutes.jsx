import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage, MarvelPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes=()=>{

    return (
        <>
        <Navbar/>

        <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage/>} />
          <Route path="dc" element={<DCPage/>} />        
          <Route path="/" element = {<Navigate to="/" />} />
          <Route path="search" element={<SearchPage/>} />   
          <Route path="hero/:id" element={<HeroPage/>} />   
        </Routes>
        </div>
        </>
    )
}
export default HeroesRoutes;