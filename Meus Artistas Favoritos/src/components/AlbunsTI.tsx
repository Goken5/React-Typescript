import InnerSpeakerImg from "../assets/img/InnerSpeaker.jpg"
import SundownSyndromeImg from "../assets/img/SundownSyndrome.jpg"
import LonerismImg from "../assets/img/Lonerism.jpg"
import FeelsLikeImg from "../assets/img/FeelsLikeWeOnlyGoBackwards.jpeg"
import CurrentsImg from "../assets/img/Currents.jpg"
import LetItHappenImg from "../assets/img/LetItHappen.jpg"
import TheSlowRushImg from "../assets/img/TheSlowRush.jpg"
import PatienceImg from "../assets/img/Patience.jpg"
import DeadbeatImg from "../assets/img/Deadbeat.jpg"
import EndOfSummerImg from "../assets/img/EndOfSummer.jpg"

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
function Currents(){
    return(
        <div id="tudo" className="flex justify-between mt-30">
            <div id="Currents" className="flex">
                <img src={CurrentsImg} alt="Currents" className="w-[300px] h-[300px]" />
                <div id="CurrentsTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Currents</h1>
                    <p className="text-2xl text-white">Publicado em 2015, Currents é para muitos, inclusive para mim, o melhor álbum de Tame Impala, juntando elementos do Rock Psicodélico, com Pop Psicodélico, sendo, para mim, o equilíbrio em todos seus álbuns. O álbum fala muito sobre mudança, sendo o seu principal foco. Também nesse álbum temos a sua música mais famosa, "The Less I Know The Better", que fala sobre como ele prefere esconder seus sentimentos e evitar fofocas do que lidar com o quão complicado seria a verdade, visto que Gossip - que significa Fofoca - é a música que vem antes de The Less i Know The Better, assim, quanto menos ele souber, melhor.</p>
                </div>
            </div>
            <div id="LetItHappen" className="flex">
                <div id="LetItHappenTxt" className="w-[30vw] m-5 ">
                    <h1 className="text-3xl text-white font-semibold">Let It Happen</h1>
                    <p className="text-2xl text-white">Let It Happen é minha música favorita de todas, é uma música que fala sobre aceitar o destino e não tentar interferir em nada, sendo um pouco conformista. A presença de sintetizadorers, guitarra, baixo, bateria, todos os instrumentos juntos, tendo sidos inteiramente gravados por Kevin Parker são simplesmente incríveis, o solo é uma das partes mais importantes da música, sendo uma junção perfeita de Guitarra, Baixo e Bateria no mesmo ritmo. Eu amo essa música com todo meu coração.</p>
                </div>
                <img src={LetItHappenImg} alt="Let It Happen" className="w-[300px] h-[300px]" />
            </div>

        </div>
    )
}
function TheSlowRush(){
    return(
        <div id="tudo" className="flex justify-between mt-30">
            <div id="TheSlowRush" className="flex">
                <img src={TheSlowRushImg} alt="The Slow Rush" className="w-[300px] h-[300px]" />
                <div id="TheSlowRushTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">The Slow Rush</h1>
                    <p className="text-2xl text-white">Publicado em 2020, após muitos adiamentos, The Slow Rush é o quarto álbum de estúdio da banda Tame Impala, um pouco mais Pop Psicodélico do que os outros, tendo mais presença de sintetizadores, inclusive com solos de sintetizador em algumas músicas. The Slow Rush, como dá a entender pelo título, fala sobre o tempo, todos os títulos do álbum referenciam ao tempo, e o álbum fala principalmente sobre como a nossa vida passa sem percebermos. Uma curiosidade é que a primeira música do álbum é One More Year e a última One More Hour, mostrando o quão rápido o tempo passa.</p>
                </div>
            </div>
            <div id="Patience" className="flex">
                <div id="PatienceTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Patience</h1>
                    <p className="text-2xl text-white">Publicado em 2019, Patience foi um single lançado antes do álbum The Slow Rush, falando muito sobre o tempo, assim como o álbum, principalmente falando sobre como o tempo passa rápido, é basicamente um trailer do álbum, sendo uma das minhas músicas favoritas, já que foi lançada em uma das vezes em que o álbum foi adiado.</p>
                </div>
                <img src={PatienceImg} alt="Patience" className="w-[300px] h-[300px]" />
            </div>
        </div>
    )
}
function Deadbeat(){
    return(
        <div id="tudo" className="flex justify-between mt-30 pb-15">
            <div id="Deadbeat" className="flex">
                <img src={DeadbeatImg} alt="Deadbeat" className="w-[300px] h-[300px]" />
                <div id="DeadbeatTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Deadbeat</h1>
                    <p className="text-2xl text-white">Será Publicado em 2025, Deadbeat é o quinto álbum de estúdio da banda Tame Impala, o álbum ainda não foi lançado, a única coisa que sabemos é sobre os dois singles que Kevin publicou, sendo eles "Loser" e "End of Summer", sendo Loser meu favorito.</p>
                </div>
            </div>
            <div id="EndOfSummer" className="flex">
                <div id="EndOfSummerTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">End Of Summer</h1>
                    <p className="text-2xl text-white">End Of Summer é uma música que é uma mistura de Rock Psicodélico com Eletrônica, e fala muito sobre Kevin Parker se achar um pai ausente, e querer ter mais tempo com os filhos, porém não conseguir por conta de turnês e ter medo de ver seus filhos crescerem sem sua atenção. Sendo assim, me parece que esse álbum será o mais "pessoal" de Kevin, já que tanto Loser, quanto End of Summer são músicas extremamente pessoais.</p>
                </div>
                <img src={EndOfSummerImg} alt="End Of Summer" className="w-[300px] h-[300px]" />
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
                if(album === "currents") return <Currents />
                if(album === "theslowrush") return <TheSlowRush />
                if(album === "deadbeat") return <Deadbeat />
                return null;
            })()}
        </div>
    )
}
export default AlbunsTI