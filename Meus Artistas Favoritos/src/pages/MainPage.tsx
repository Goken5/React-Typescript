import Header from "../components/Header";
import Artistas from "../components/Artistas";

function MainPage(){
    return (
        <div id="tudo" className="flex flex-col bg-gray-900 h-[100vh]">
            <Header mode="main" />
            <div id="artistas" className="flex-1 flex pt-[20vh]">
                <Artistas artist="TameImpala"/>
                <Artistas artist="PinkFloyd"/>
                <Artistas artist="RedHot"/>
            </div>
        </div>
    )   
}
export default MainPage;