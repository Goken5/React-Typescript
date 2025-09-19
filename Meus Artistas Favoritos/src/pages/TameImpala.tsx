import Header from "../components/Header"
import AlbunsTI from "../components/AlbunsTI"

function TameImpala(){
    return(
        <div className=" bg-indigo-900 h-full">
            <Header mode="tameimpala"/>
            <div id="albuns">
                <div id="titulos" className="flex justify-between">
                    <h1 className="text-4xl font-bold text-white m-5">Álbuns</h1>
                    <h1 className="text-4xl font-bold text-white m-5">Singles</h1>
                </div>
                <AlbunsTI album="innerspeaker"/>
                <AlbunsTI album="lonerism" />
            </div>
        </div>
    )
}
export default TameImpala;