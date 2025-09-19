import TameImpalaImg from "../assets/img/TameImpala.jpg";
import PinkFloydImg from "../assets/img/PinkFloyd.jpg";
import RedHotChiliPeppers from "../assets/img/RedHotChiliPeppers.jpg"
import { Link } from "react-router-dom"

type ArtistasProps = {
    artist: string;
};
function TameImpala(){
    return(
        <div id="TameImpalaDiv" className="flex flex-col w-[30vw] m-5 items-center text-center">
            <img src={TameImpalaImg} alt="Tame Impala" className="h-[300px] w-[300px]"/>
            <Link to="/tameimpala" className="text-3xl text-white underline hover:scale-110 transition-all font-bold">Tame Impala</Link>
            <p className="text-white text-2xl">Tame Impala é a banda de Rock/Pop Psicodélico criada por Kevin Parker em 2007.</p>
        </div>
    )
}
function PinkFloyd(){
    return(
        <div id="PinkFloydDiv" className="flex flex-col w-[30vw] m-5 items-center text-center">
            <img src={PinkFloydImg} alt="Pink Floyd" className="h-[300px] w-[300px]"/>
            <a href="" className="text-3xl text-white underline hover:scale-110 transition-all font-bold">Pink Floyd</a>
            <p className="text-white text-2xl">Pink Floyd é uma das bandas mais famosas e bem sucecidas de Rock Psicodélico, criada em 1965.</p>
        </div>
    )
}
function RedHot(){
    return(
        <div id="RedHotChiliPeppersDiv" className="flex flex-col w-[30vw] m-5 items-center text-center">
            <img src={RedHotChiliPeppers} alt="Red Hot Chili Peppers" className="h-[300px] w-[300px]" />
            <a href="" className="text-3xl text-white underline hover:scale-110 transition-all font-bold">Red Hot Chili Peppers</a>
            <p className="text-white text-2xl">Red Hot Chili Peppers é uma das bandas Americanas mais famosas do mundo, criada em 1983.</p>
        </div>
    )
}
function Artistas({ artist } : ArtistasProps){
    return(
        <div className="flex">
            {(() => {
                if(artist === "TameImpala") return <TameImpala />
                if(artist === "PinkFloyd") return <PinkFloyd />
                if(artist === "RedHot") return <RedHot />
                return null;
            })()}
        </div>
    )
}
export default Artistas;