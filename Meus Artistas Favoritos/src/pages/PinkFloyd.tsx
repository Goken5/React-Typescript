import Header from "../components/Header"
import AlbunsPF from "../components/AlbunsPF"

function PinkFloyd(){
    return(
        <div className="bg-pink-900 min-h-screen">
            <Header mode="pinkfloyd" />
            <div id="albuns">
                <div id="titulos" className="flex text-center">
                    <h1 className="text-4xl font-bold text-white m-5">Álbuns</h1>
                </div>
                    <AlbunsPF album="piperwish" />
                    <AlbunsPF album="darksideofreason" />
            </div>
        </div>
    )
}
export default PinkFloyd;