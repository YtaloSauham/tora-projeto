import { GithubLogo } from "phosphor-react";


interface CardGit{
    name?: string;
    description?: string;
    image?:string;
    linkGit?:string;

}
export default function CardsGit(){

    let cardGit:Array<CardGit> =[
        {name:"Ytalo Sauham", description:"Criador do Site.",image:"https://avatars.githubusercontent.com/u/85992772?v=4",linkGit:"https://github.com/YtaloSauham"},
        {name:"Francisco Remo", description:"Criador do Site",image:"https://avatars.githubusercontent.com/u/75093311?v=4",linkGit:"https://github.com/Franciscoflh"},
        {name:"Lucas Felipe", description:"Documentação.",image:"https://avatars.githubusercontent.com/u/75092912?v=4",linkGit:"https://github.com/LucasFelip"},
        {name:"David Alysson",description:"Documentação.",image:"https://avatars.githubusercontent.com/u/83242836?v=4",linkGit:"https://github.com/DavidAly"},
        {name:"Rafael Mendes",description:"Documentação.",image:"https://avatars.githubusercontent.com/u/52051631?v=4",linkGit:"https://github.com/rafaelmendesJW"},
       
    ]
    

    return(

        <div className="container flex grid h-full mx-auto mt-20 text-black">
            <div className="grid ">
                <div className="text-3xl font-bold ">
                Equipe
                    <div className="grid grid-cols-1">
                        {
                            cardGit.map((cardGit,index)=>{
                                return(
                                    <>
                                        <div className="flex items-center gap-4 mt-6">
                                    <img className="h-20 w-20 rounded-full border border-blue-500"
                                    src={cardGit.image}
                                    alt=""
                                    />
                                    <div className="leading-relaxed">
                                        <strong className="font-bold text-2xl block">{cardGit.name}</strong>
                                        <span className="text-black-200 text-sm block">{cardGit.description}</span>
                                        <button className="text-white-300 bg-black h-[30px] w-[30px] rounded-md text-sm flex items-center justify-center"><a className="flex" href={cardGit.linkGit}><GithubLogo size={20}/></a></button>
                                    </div>
                                </div>

                                </>
                                

                                )
                        }
                    )}
                   

                    </div>
                </div>



            </div>
        </div>

          

   
       


 
                            
    )
}