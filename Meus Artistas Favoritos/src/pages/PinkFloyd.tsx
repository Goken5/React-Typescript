import Header from "../components/Header"
import AlbunsPF from "../components/AlbunsPF"

function PinkFloyd(){
    return(
        <div className="bg-pink-900 min-h-screen">
            <Header mode="pinkfloyd" />
            <div id="albuns">
                <div id="titulos" className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white m-5">Principais Álbuns</h1>
                </div>
                    <AlbunsPF album="piperwish" />
                    <AlbunsPF album="darksideofreason" />
                    <AlbunsPF album="divisionbell" />
            </div>
        </div>
    )
}
export default PinkFloyd;