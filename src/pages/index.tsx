
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <Jumbotron/>
     <Layout>
     <Hero title='O que é TORA?' content='TORA se trata de uma ferramenta de resolução de
      cálculos matemáticos complexos, que necessitam de uma resolução extremamente elaborada e/ou 
      extremamente precisa, como equação linear, modelos de redes, programação linear, entre outros tipos.
'     image="../../img/tora-nome.png"/>
    </Layout>
    </>
  )
}
