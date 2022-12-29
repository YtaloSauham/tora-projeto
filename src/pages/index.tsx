

import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'
import Aos from 'aos'
import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'



export default function Home() {

  useEffect(() =>{
    Aos.init({duration:1500});
  },[])


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
