import BtwImg from "../assets/img/ByTheWay.jpg"
import CalifornicationImg from "../assets/img/Californication.jpg"
import StadiumArcadiumImg from "../assets/img/StadiumArcadium.jpg"
import BloodySugarImg from "../assets/img/BloodySugarSexMagik.jpg"
import DosedImg from "../assets/img/Dosed.jpg"

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
                    <p className="text-2xl text-white">By The Way é o oitavo álbum de estúdio do Red Hot Chili Peppers, um álbum que se difere dos outros por ser um pouco mais alternativo e melódico, trazendo músicas um pouco mais suaves, e tendo uma das músicas mais famosas da banda: Can't Stop. Além disso, By The Way é um dos álbuns com mais Singles da banda, e o mais famoso também. Minha música favorita do álbum é Dosed.</p>
                </div>
            </div>
            <div id="Californication" className="flex">
                <div id="CalifornicationTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Californication</h1>
                    <p className="text-2xl text-white">Californication é o sétimo álbum de estúdio da banda, o álbum mais famoso da banda, tendo músicas incríveis como Californication, Scar Tissue, Otherside, Around The World, etc. O título se refere a "California" e "Fornicação", querendo se referir à decadência moral e à superficialidade associadas a cultura de Hollywood. Minha música favorita do álbum é Scar Tissue.</p>
                </div>
                <img src={CalifornicationImg} alt="Californication" className="h-[300px] w-[300px]"/>
            </div>
        </div>
    )
}
function StadiumSexMagik(){
    return(
        <div id="tudo" className="flex justify-between mt-30">
            <div id="StadiumArcadium" className="flex">
                <img src={StadiumArcadiumImg} alt="Stadium Arcadium" className="h-[300px] w-[300px]" />
                <div id="StadiumArcadiumTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Stadium Arcadium</h1>
                    <p className="text-2xl text-white">Stadium Arcadium é o nono álbum de estúdio da banda Red Hot Chili Peppers, lançado em 2006, o álbum foi lançado dividido em dois discos: Jupiter e Mars. Stadium Arcadium tem uma diversidade de estilos muito grande, contendo Pop, Hard Rock, entre outros. Minha música favorita do álbum é Snow (Hey Oh), a mais famosa, e considerada por muitos, a melhor do RHCP.</p>
                </div>
            </div>
            <div id="BloodySugarSexMagik" className="flex">
                <div id="BloodySugarSexMagikTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Bloody Sugar Sex Magik</h1>
                    <p className="text-2xl text-white">Bloody Sugar Sex Magik é o quinto álbum de estúdio do Red Hot, lançado em 1991, foi o primeiro grande sucesso da banda, sendo um dos álbuns mais influentes dos anos 90. O álbum tem títulos e letras que se referem muito a atividades sexuais, mesmo que nas entrelinhas, e isso faz parte da identidade da banda na época. Minha música favorita é Give It Away, uma das mais famosas do disco.</p>
                </div>
                <img src={BloodySugarImg} alt="Bloody Sugar Sex Magik" className="h-[300px] w-[300px]" />
            </div>
        </div>
    )
}
function Dosed(){
    return(
        <div id="tudo" className="flex justify-center mt-30">
            <div id="Dosed" className="flex items-center">
                <img src={DosedImg} alt="Dosed" className="h-[300px] w-[300px]"/>
                <div id="DosedTxt" className="w-[30vw] m-5">
                    <h1 className="text-3xl text-white font-semibold">Dosed</h1>
                    <p className="text-2xl text-white">Dosed é minha música favorita do Red Hot Chili Peppers, lançada em 2002 no álbum By The Way, e lançada como Single posteriormente. A música é extremamente melancólica e um pouco psicodélica, com 4 guitarras sobrepostas e uma letra e ritmo completamente melancólicos, muitos acreditam que a música é uma homenagem ao primeiro guitarrista da banda, que morreu de overdose em 1988. Outra parte da música que é incrível são os vocais, já que ambos John Frusciante e Anthony Kiedis cantam quase a música toda juntos, em harmonia. Além de tudo isso, a primeira vez que a música foi tocada Ao Vivo foi em 2017, quando um fã de 17 anos estava com uma doença terminal e eles tocaram a música favorita dele na turnê, essa música era Dosed.</p>
                </div>
            </div>
        </div>
    )
}
function AlbunsRHCP({ album } : AlbunsRHCPProps){
    return(
        <div className="m-5">
            {(() => {
                if(album === "bythefornication") return <ByTheFornication />
                if(album === "stadiumsexmagik") return <StadiumSexMagik />
                if(album === "dosed") return <Dosed />
                return null
            })()}
        </div>
    )
}
export default AlbunsRHCP