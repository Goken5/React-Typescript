import InnerSpeakerImg from "../assets/img/InnerSpeaker.jpg"
import SundownSyndromeImg from "../assets/img/SundownSyndrome.jpg"
import LonerismImg from "../assets/img/Lonerism.jpg"
import FeelsLikeImg from "../assets/img/FeelsLikeWeOnlyGoBackwards.jpeg"

type AlbunsTIProps = {
    album: string;
}
function InnerSpeaker(){
    return(
        <div id="tudo" className="flex justify-between">
            <div id="InnerSpeaker" className="flex">
                <img src={InnerSpeakerImg} alt="InnerSpeaker" className="w-[300px] h-[300px]" />
                <div id="InnerSpeakerTxt" className="w-[30vw] m-5"> 
                    <h1 className="text-3xl text-white font-semibold">InnerSpeaker</h1>    
                    <p className="text-2xl text-white">Publicado em 2010, InnerSpeaker foi o primeiro álbum de estúdio da banda Tame Impala, onde Kevin Parker, único membro da banda, gravou, remixou e públicou todos os instrumentos e vocais de todas as músicas. O álbum fala principalmente sobre solidão, sendo, para mim, o álbum mais psicodélico de Kevin.</p>
                </div>
            </div>
            <div id="SundownSyndrome" className="flex">
                <div id="SundownSyndromeTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Sundown Syndrome</h1>
                    <p className="text-2xl text-white">Publicado em 2009, Sundown Syndrome foi um dos primeiros Singles de Kevin Parker, lançado antes de seu primeiro álbum, Sundown Syndrome tem uma das capas mais psicodélicas da banda, e, para mim, é o single mais psicodélico. Esse Single fala sobre a mente de Kevin, sobre frustração, e sobre um relacionamento frustrado.</p>
                </div>
                <img src={SundownSyndromeImg} alt="Sundown Syndrome" className="w-[300px] h-[300px]"/>
            </div>
        </div>
        
    )
}
function Lonerism(){
    return(
        <div id="tudo" className="flex justify-between mt-30">
            <div id="Lonerism" className="flex">
                <img src={LonerismImg} alt="Lonerism" className="w-[300px] h-[300px]" />
                <div id="LonerismTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Lonerism</h1>
                    <p className="text-2xl text-white">Publicado em 2012, apenas 2 anos depois de seu antecessor, Lonerism foi o segundo álbum de estúdio de Tame Impala, sendo um álbum muito psicodélico, com grande presença de sintetizadores e pedais, transformando o som de instrumentos. O álbum fala sobre isolamento, solidão, cansar da rotina e sobre como a nossa mente acaba se tornando uma bagunça, exemplos disso são os próprios títulos "Feels Like We Only Go Backwards", "Music to Walk Home By" e "Mind Mischief", entre outros.</p>
                </div>
            </div>
            <div id="FeelsLikeWeOnlyGoBackwards" className="flex">
                <div id="FeelsLikeTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Feels Like We Only Go Backwards</h1>
                    <p className="text-2xl text-white">Publicado também em 2012, Feels Like We Only Go Backwards é um single do próprio álbum Lonerism, escolhi esse Single porque a letra representa muito o álbum, falando sobre como é melhor ficar sozinho do que tentar avançar, porque sempre que o personagem tenta avançar, parece que ele só retrocede, fazendo com que cada tentativa seja frustrada.</p>
                </div>
                <img src={FeelsLikeImg} alt="Feels Like We Only Go Backwards" className="w-[300px] h-[300px]"/>
            </div>
        </div>
    )
}
function AlbunsTI({ album } : AlbunsTIProps){
    return(
        <div className="m-5">
            {(() => {
                if(album === "innerspeaker") return <InnerSpeaker />
                if(album === "lonerism") return <Lonerism />
                return null;
            })()}
        </div>
    )
}
export default AlbunsTI