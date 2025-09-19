import Header from "../components/Header";

function AboutMe(){
    return (
        <div className="flex flex-col w-[100vw] h-[100vh] bg-indigo-950 text-center text-white">
            <Header mode="main"/>
            <h1 className="text-5xl font-bold font-serif mt-25">Sobre Mim</h1>
            <p className="text-2xl mt-5 ml-[15vw] mr-[15vw]"> Olá, me chamo Davi Fernandes, tenho 16 anos, sou estudante do Instituto Federal Fluminense e sou um programador focado em programação competitiva, usuário principalmente do C++, 
                participei de competições como OBI, e venho sempre melhorando meu conhecimento nessa linguagem, porém venho a algum tempo desenvolvendo meu conhecimento sobre front-end, e esse site simples sobre meus artistas favoritos é meu primeiro projeto front-end por conta própria. Estou em busca de aprender sempre mais,
                principalmente sobre React, Tailwind e Typescript, que são meu foco atual. Futuramente planejo estudar back-end, também usando Typescript, no entando, por agora, estou focado na criação e aprimoração de minhas habilidades como
                desenvolvedor front-end, obrigado pela atenção!</p>
            <p className="text-2xl mt-5 ml-[15vw] mr-[15vw]"> Todos os textos incluídos nesse projeto foram feitos de forma autoral, e todas as imagens são de </p> <a href="https://open.spotify.com/intl-pt" className="text-2xl mt-5 ml-[15vw] mr-[15vw] underline">https://open.spotify.com/intl-pt</a>
        </div>
    )
}
export default AboutMe