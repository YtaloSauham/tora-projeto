
interface steps{
    step?: string;
    contain?: string;
    image?:string;

}

export default function HeroSteps(){
    let steps:Array<steps> =[
        {step:"1", contain:"Copie o ToraSystem para uma pasta no disco rígido.",image:"../../img/step-1.png"},
        {step:"2", contain:"Na pasta criada, clique em setup.exe.",image:""},
        {step:"3", contain:"O instalador irá carregar alguns arquivos para execução.",image:""},
        {step:"4", contain:"Depois clique em Ok.",image:""},
        {step:"5", contain:"Clique no ícone do computador para definir o local de instalação.",image:""},
        {step:"5", contain:"Na tela seguinte clique em continuar.",image:""},
        {step:"6", contain:"Clique em Ok e o Tora Software foi instalado com sucesso!",image:""},
        {step:"7", contain:"Clique em tora.exe gerado por setup.exe.",image:""},
        {step:"8", contain:"Clique em “Click Here” para iniciar o TORA",image:""},
        {step:"9", contain:"No Menu Principal, selecione Programação Linear.",image:""},
        {step:"10", contain:`Ative o botão radial "Selecionar arquivo existente".`,image:""},
        {step:"11", contain:"Abra o test.txt fornecido nesta pasta.",image:""},
        {step:"12", contain:"Clique em “Solve”",image:""},
        {step:"13", contain:"Clique em “Solve problem” e em “Graphical”",image:""},
        {step:"14", contain:"O TORA retorna a resolução do problema",image:""},
        {step:"15", contain:"",image:""},
        {step:"16", contain:"",image:""}
    ]
    

    
    return(
    <div>
    
    </div>)
}