import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Conceitos() {
    return (
      <>
       <Layout>
          <Hero title="Pesquisa Operacional" content="A pesquisa operacional é um método analítico de solução de problemas e tomada de 
          decisão que é útil no gerenciamento de organizações. Na pesquisa de operacional, 
          os problemas são divididos em componentes básicos e depois resolvidos em etapas definidas por análise matemática que falaremos mais tarde."
          image="../../img/pesquisa-operacional.png"/>
          <hr className="text-black"/>
          <Hero title="Origem" content="Durante a Segunda Guerra Mundial, os líderes militares solicitaram que 
          cientistas estudassem problemas como posicionamento de radares, armazenamento de munições e transporte de tropas, entre outros.A aplicação do método científico e de ferramentas matemáticas em operações militares
           passou a ser chamado de Pesquisa Operacional. Hoje em dia, Pesquisa Operacional é um enfoque científico para Problemas de Decisão."
           image="../../img/segunda-guerra.png"/>
      </Layout>
      </>
    )
  }
  