import CardsGit from "../components/CardsGit";
import Layout from "../components/Layout";
import CardGit from "../Interfaces/ICardGit";

export default function Sobre() {
  let cardGit: Array<CardGit> = [
    {
      name: "Ytalo Sauham",
      description: "Criador do Site.",
      image: "https://avatars.githubusercontent.com/u/85992772?v=4",
      linkGit: "https://github.com/YtaloSauham",
    },
    {
      name: "Francisco Remo",
      description: "Criador do Site",
      image: "https://avatars.githubusercontent.com/u/75093311?v=4",
      linkGit: "https://github.com/Franciscoflh",
    },
    {
      name: "Lucas Felipe",
      description: "Documentação.",
      image: "https://avatars.githubusercontent.com/u/75092912?v=4",
      linkGit: "https://github.com/LucasFelip",
    },
    {
      name: "David Alysson",
      description: "Documentação.",
      image: "https://avatars.githubusercontent.com/u/83242836?v=4",
      linkGit: "https://github.com/DavidAly",
    },
    {
      name: "Rafael Mendes",
      description: "Documentação.",
      image: "https://avatars.githubusercontent.com/u/52051631?v=4",
      linkGit: "https://github.com/rafaelmendesJW",
    },
  ];
  return (
    <>
      <Layout>
        <CardsGit cardGit={cardGit} animation='fade-up'/>
      </Layout>
    </>
  );
}
