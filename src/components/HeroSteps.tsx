import { ArrowArcLeft, ArrowLeft } from "phosphor-react";

interface steps{
    step?: string;
    contain?: string;
    image?:string;

}

export default function HeroSteps(){
    let steps:Array<steps> =[
        {step:"1", contain:"Baixe o TORA.",image:"../../img/step-1.png"},
        {step:"2", contain:"Na pasta criada, clique em setup.exe.",image:"../../img/step-2.png"},
        {step:"3", contain:"O instalador irá carregar alguns arquivos para execução.",image:"../../img/step-3.png"},
        {step:"4", contain:"Depois clique em Ok.",image:"../../img/step-4.png"},
        {step:"5", contain:"Clique no ícone do computador para definir o local de instalação.",image:"../../img/step-5.png"},
        {step:"6", contain:"Na tela seguinte clique em continuar.",image:"../../img/step-6.png"},
        {step:"7", contain:"Clique em Ok e o Tora Software foi instalado com sucesso!",image:"../../img/tora-nome.png"},
        {step:"8", contain:"Clique em tora.exe gerado por setup.exe.",image:"../../img/step-8.png"},
        {step:"9", contain:"Clique em “Click Here” para iniciar o TORA",image:"../../img/tora-nome.png"},
        {step:"10", contain:"No Menu Principal, selecione Programação Linear.",image:"../../img/step-10.png"},
        {step:"11", contain:`Ative o botão radial "Selecionar arquivo existente".`,image:"../../img/step-11.png"},
        {step:"12", contain:"Abra o test.txt fornecido nesta pasta.",image:"../../img/step-12.png"},
        {step:"13", contain:"Clique em “Solve”",image:"../../img/step-13.png"},
        {step:"14", contain:"Clique em “Solve problem” e em “Graphical”",image:"../../img/step-14.png"},
        {step:"15", contain:"O TORA retorna a resolução do problema",image:"../../img/step-15.png"},
    ]
    

    
    return(
        <div className="container flex items-center justify-center">
        <div className="container flex flex-col gap-12 mt-[6rem] lg:mt-28 ">
   
      <div className="flex flex-col items-center lg:items-start">
      <a href="/Tutoriais" className="flex hover:underline justify-between item-center mb-5 text-blue-500 font-semibold"><i className="flex justify-between "><ArrowLeft size={23}/>Tutoriais</i></a>

        <h2 className="text-3xl font-bold md:text-4 lg:text-4xl text-center lg:text-left mb-6">
        Como iniciar o TORA.
        </h2>
        </div>
        {steps.map((steps,index)=>{
            return(
                <>
        <p className=" text-bookmark-grey text-lg text-center lg:text-left ">
         <i className="text-2xl text-blue-600 font-bold">Passo {index +1}:</i> {steps.contain}
         </p>
         
      <div className="flex flex-col justify-center">
        <img className=" w-full h-[20rem] object-contain" src={steps.image} alt="" />
      </div>
      </>
            )

        })}
        
      </div>
    </div>
 
    )
}