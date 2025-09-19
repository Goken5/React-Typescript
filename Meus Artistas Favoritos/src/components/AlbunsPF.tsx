import PiperGatesImg from "../assets/img/PiperGates.jpg"
import WishYouWereHereImg from "../assets/img/WishYouWereHere.jpg"
import DarkSideImg from "../assets/img/DarkSide.jpg"
import MomentaryLapseImg from "../assets/img/MomentaryLapseOfReason.jpg"

type AlbunsPFProps = {
    album: string;
}
function PiperWish(){
    return (
        <div id="tudo" className="flex justify-between">
            <div id="PiperGates" className="flex">
                <img src={PiperGatesImg} alt="Piper Gates" className="w-[300px] h-[300px]" />
                <div id="PiperGatesTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">The Piper at the Gates of Dawn</h1>
                    <p className="text-2xl text-white">The Piper at the Gates of Dawn é o primeiro álbum da banda britânica, lançado em 1967, para mim, um dos álbuns mais psicodélicos da banda, seu compositor foi Syd Barret, e o álbum foi influenciado pelo livro O Vento nos Salgueiros, o que pode ser percebido pelo seu título, já que no livro tem um capítulo chamado justamente The Piper At The Gates of Dawn. </p>
                </div>
            </div>
            <div id="WishYouWereHere" className="flex">
                <div id="WishYouWereHereTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Wish You Were Here</h1>
                    <p className="text-2xl text-white">Wish You Were Here é o nono álbum de estúdio da banda, lançado em 1975, o álbum é uma grande homenagem a Syd Barrett, que estava afastado da banda por complicações em sua saúde mental, por isso o nome "Wish You Were Here", o álbum também é uma crítica a indústria musical, e tem músicas incríveis como Shine On You Crazy Diamond, Wish You Were Here e Welcome to the Machine.</p>
                </div>
                <img src={WishYouWereHereImg} alt="Wish You Were Here" className="w-[300px] h-[300px]"/>
            </div>
        </div>
    )
}
function DarkSideOfReason(){
    return(
        <div id="tudo" className="flex justify-between">
            <div id="DarkSide" className="flex">
                <img src={DarkSideImg} alt="The Dark Side of The Moon" className="w-[300px] h-[300px]" />
                <div id="DarkSideTxt">
                    <h1 className="text-3xl text-white font-semibold">The Dark Side Of The Moon</h1>
                    <p className="text-2xl text-white">The Dark Side Of The Moon foi o oitavo e mais famoso álbum do Pink Floyd, lançado em 1973, o álbum é considerado por muitos, o melhor álbum da história do rock, ele tem ótimas transições, principalmente se levarmos em consideração o ano em que foi lançado, e tem músicas muito conhecidas como: "Money", "Breathe(In the Air", "Time" entre outros.</p>
                </div>
            </div>
            <div id="MomentaryLapse" className="flex">
                <div id="MomentaryLapseTxt">
                    <h1 className="text-3xl text-white font-semibold">A Momentary Lapse Of Reason</h1>
                    <p className="text-2xl text-white">A Momentary Lapse Of Reason foi o décimo terceiro disco da banda, lançado em 1987, é meu favorito da banda, é um álbum extremamente subestimado, com ótimas músicas e uma capa incrível, simplesmente 700 camas de hospital em uma praia, colocadas uma por uma, e além disso, a capa é cheia de referências a músicas do álbum como "Learning to Fly" e "Dogs of War". </p>
                </div>
                <img src={MomentaryLapseImg} alt="A Momentary Lapse Of Reason" className="w-[300px] h-[300px]" />
            </div>
        </div>
    )
}
function AlbunsPF({ album } : AlbunsPFProps){
    return (
        <div className="m-5">
            {(() => {
                if(album === "piperwish") return <PiperWish />
                if(album === "darksideofreason") return <DarkSideOfReason />
                return null;
            })()}
        </div>
    )
}
export default AlbunsPF