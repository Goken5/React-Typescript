import BtwImg from "../assets/img/ByTheWay.jpg"
import CalifornicationImg from "../assets/img/Californication.jpg"

type AlbunsRHCPProps = {
    album: string;
}
function ByTheFornication(){
    return(
        <div id="tudo" className="flex justify-between">
            <div id="ByTheWay" className="flex">
                <img src={BtwImg} alt="By The Way" className="h-[300px] w-[300px]"/>
                <div id="ByTheWayTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">By The Way</h1>
                    <p className="text-2xl text-white">By The Way é o oitavo álbum de estúdio do Red Hot Chili Peppers, um álbum que se difere dos outros por ser um pouco mais alternativo e melódico, trazendo músicas um pouco mais suaves, e tendo uma das músicas mais famosas da banda: Can't Stop. </p>
                </div>
            </div>
            <div id="Californication" className="flex">
                <div id="CalifornicationTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Californication</h1>
                    <p className="text-2xl text-white">Californication é o sétimo álbum de estúdio da banda, o álbum mais famoso da banda, tendo músicas incríveis como Californication, Scar Tissue, Otherside, Around The World, etc. O título se refere a "California" e "Fornicação", querendo se referir à decadência moral e à superficialidade associadas a cultura de Hollywood.</p>
                </div>
                <img src={CalifornicationImg} alt="Californication" className="h-[300px] w-[300px]"/>
            </div>
        </div>
    )
}
function AlbunsRHCP({ album } : AlbunsRHCPProps){
    return(
        <div className="m-5">
            {(() => {
                if(album === "bythefornication") return <ByTheFornication />
                return null
            })()}
        </div>
    )
}
export default AlbunsRHCP