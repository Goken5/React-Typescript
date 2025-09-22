import Header from "../components/Header"
import AlbunsRHCP from "../components/AlbunsRHCP"

function RedHotChiliPeppers(){
    return(
        <div className="bg-red-900 min-h-screen">
            <Header mode="redhot"/>
            <div id="albuns">
                <div id="titulos" className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white m-5">Principais Álbuns</h1>
                </div>
                <AlbunsRHCP album="bythefornication" />
                <AlbunsRHCP album="stadiumsexmagik" />
                <AlbunsRHCP album="dosed" />
            </div>
        </div>
    )
}
export default RedHotChiliPeppers