import HeroSteps from "../components/HeroSteps";
import Layout from "../components/Layout";
import IStepsTutorial from "../Interfaces/IStepsTutorial";

export default function Iniciar() {
  let steps: Array<IStepsTutorial> = [
    { step: "1", contain: "Baixe o TORA.", image: "../../img/step-1.png" },
    {
      step: "2",
      contain: "Na pasta criada, clique em setup.exe.",
      image: "../../img/step-2.png",
    },
    {
      step: "3",
      contain: "O instalador irá carregar alguns arquivos para execução.",
      image: "../../img/step-3.png",
    },
    {
      step: "4",
      contain: "Depois clique em Ok.",
      image: "../../img/step-4.png",
    },
    {
      step: "5",
      contain:
        "Clique no ícone do computador para definir o local de instalação.",
      image: "../../img/step-5.png",
    },
    {
      step: "6",
      contain: "Na tela seguinte clique em continuar.",
      image: "../../img/step-6.png",
    },
    {
      step: "7",
      contain: "Clique em Ok e o Tora Software foi instalado com sucesso!",
      image: "../../img/tora-nome.png",
    },
    {
      step: "8",
      contain: "Clique em tora.exe gerado por setup.exe.",
      image: "../../img/step-8.png",
    },
    {
      step: "9",
      contain: "Clique em “Click Here” para iniciar o TORA",
      image: "../../img/tora-nome.png",
    },
    {
      step: "10",
      contain: "No Menu Principal, selecione Programação Linear.",
      image: "../../img/step-10.png",
    },
    {
      step: "11",
      contain: `Ative o botão radial "Selecionar arquivo existente".`,
      image: "../../img/step-11.png",
    },
    {
      step: "12",
      contain: "Abra o test.txt fornecido nesta pasta.",
      image: "../../img/step-12.png",
    },
    {
      step: "13",
      contain: "Clique em “Solve”",
      image: "../../img/step-13.png",
    },
    {
      step: "14",
      contain: "Clique em “Solve problem” e em “Graphical”",
      image: "../../img/step-14.png",
    },
    {
      step: "15",
      contain: "O TORA retorna a resolução do problema",
      image: "../../img/step-15.png",
    },
  ];

  return (
    <>
      <Layout>
        <HeroSteps stepsTutorial={steps} />
      </Layout>
    </>
  );
}
