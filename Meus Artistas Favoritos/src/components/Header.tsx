import { Link } from "react-router-dom"

type HeaderProps = {
    mode: string;
};
function MainHeader(){
    return (
        <header className="flex items-center h-[60px] bg-black w-[100vw] justify-between">
            <Link to="/main" className="text-3xl text-white font-serif ml-5">Meus Artistas Favoritos</Link>
            <Link to="/aboutme" className="text-3xl text-white font-serif mr-5">Sobre Mim</Link>
        </header>
        
    )
}
function TameImpalaHeader(){
    return(
        <header className="flex items-center h-[60px] bg-indigo-950 w-full justify-between m-0">
            <h1 className="text-3xl text-white font-serif ml-5">Tame Impala</h1>
            <Link to="/main" className="text-3xl text-white font-serif mr-5">Página Inicial</Link>
        </header>
    )
}
function Header({ mode } : HeaderProps){
    return (
       <div>
            {(() => {
                if(mode === "main") return <MainHeader />
                if(mode === "tameimpala") return <TameImpalaHeader />
                return null;
            })()}
       </div>
    )
}
export default Header;