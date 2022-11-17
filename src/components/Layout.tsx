import Head from "next/head"
import Footer from "./Footer"
import NavBar from "./NavBar"

interface LayoutProps{
    
    children?: any
}

export default function Layout(props:LayoutProps){
    return(
        <>
        <Head>
        <title>TORA SITE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href=".../.../public/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

        <NavBar/>
        <div className="flex flex-col  items-center
        w-full
        p-7">
            
            {props.children}

        </div>
        <Footer/>
        </>
    )
}