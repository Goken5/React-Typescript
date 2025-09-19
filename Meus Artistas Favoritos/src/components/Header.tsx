import { Link } from "react-router-dom"

type HeaderProps = {
    mode: string;
};
function MainHeader(){
    return (
        <header className="flex items-center h-[60px] bg-black text-center w-[100vw] justify-between">
            <Link to="/main" className="text-3xl text-white font-serif ml-5">Meus Artistas Favoritos</Link>
            <Link to="/aboutme" className="text-3xl text-white font-serif mr-5">Sobre Mim</Link>
        </header>
        
    )
}
function Header({ mode } : HeaderProps){
    return (
       <div>
            {(() => {
                if(mode === "main") return <MainHeader />
                return null;
            })()}
       </div>
    )
}
export default Header;