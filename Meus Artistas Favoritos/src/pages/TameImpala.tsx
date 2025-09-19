import Header from "../components/Header"
import AlbunsTI from "../components/AlbunsTI"

function TameImpala(){
    return(
        <div className=" bg-cyan-800 h-full">
            <Header mode="tameimpala"/>
            <div id="albuns">
                <div id="titulos" className="flex justify-between">
                    <h1 className="text-4xl font-bold text-white m-5">Álbuns</h1>
                    <h1 className="text-4xl font-bold text-white m-5">Singles</h1>
                </div>
                <AlbunsTI album="innerspeaker"/>
                <AlbunsTI album="lonerism" />
                <AlbunsTI album="currents" />
                <AlbunsTI album="theslowrush" />
                <AlbunsTI album="deadbeat" />
            </div>
        </div>
    )
}
export default TameImpala;