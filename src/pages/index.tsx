
import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
     <NavBar/>
     <Jumbotron/>
     <Hero/>
     </div>
  
  )
}
