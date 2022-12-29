

import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'


export default function Home() {

  return (
    <>
     <Jumbotron/>
     <Layout>
     <Hero  title='O que é TORA?' content='TORA se trata de uma ferramenta de resolução de
      cálculos matemáticos complexos, que necessitam de uma resolução extremamente elaborada e/ou 
      extremamente precisa, como equação linear, modelos de redes, programação linear, entre outros tipos.
'     image="../../img/tora-nome.png" animation='fade-up'/>
    </Layout>
    </>
  )
}
