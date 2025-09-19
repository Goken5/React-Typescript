import { Link } from "react-router-dom"

type HeaderProps = {
    mode: string;
};
function MainHeader(){
    return (
        <header className="flex items-center h-[60px] bg-black w-[100vw] justify-between">
            <Link to="/main" className="text-3xl text-white font-serif ml-5 hover:scale-110 transition-all">Meus Artistas Favoritos</Link>
            <Link to="/aboutme" className="text-3xl text-white font-serif mr-5 hover:scale-110 transition-all">Sobre Mim</Link>
        </header>
        
    )
}
function TameImpalaHeader(){
    return(
        <header className="flex items-center h-[60px] bg-cyan-950 w-full justify-between">
            <h1 className="text-3xl text-white font-serif ml-5">Tame Impala</h1>
            <Link to="/main" className="text-3xl text-white font-serif mr-5 hover:scale-110 transition-all">Página Inicial</Link>
        </header>
    )
}
function PinkFloydHeader(){
    return(
        <header className="flex items-center h-[60px] bg-pink-950 w-full justify-between">
            <h1 className="text-3xl text-white font-serif ml-5">Pink Floyd</h1>
            <Link to="/main" className="text-3xl text-white font-serif mr-5 hover:scale-110 transition-all">Página Inicial</Link>
        </header>
    )
}
function Header({ mode } : HeaderProps){
    return (
       <div>
            {(() => {
                if(mode === "main") return <MainHeader />
                if(mode === "tameimpala") return <TameImpalaHeader />
                if(mode === "pinkfloyd") return <PinkFloydHeader />
                return null;
            })()}
       </div>
    )
}
export default Header;