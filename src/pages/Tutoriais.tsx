import CardsTutorial from "../components/CardsTutorial";
import Layout from "../components/Layout";
import CardTutorial from "../Interfaces/ICardTutorial";
import styles from "../styles/Home.module.css";

export default function Tutoriais() {
  let cardsTutorial: Array<CardTutorial> = [
    {
      title: "Conceitos de IPO",
      contain: "Sabe o que é IPO? Entenda sua origem e seu conceito.",
      linkPage: "/Conceitos",
    },
    {
      title: "Como iniciar o TORA",
      contain:
        "Inicializando o TORA com rapidez para começar a resolver problemas.",
      linkPage: "/IniciarTora",
    },
  ];

  return (
    <>
      <Layout>
        <CardsTutorial cardTutorial={cardsTutorial} />
      </Layout>
    </>
  );
}
