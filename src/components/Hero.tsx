import { ImageProps } from "next/image";

interface HeroProps{
    title?:string;
    content?:string;
    subtitle?:string;
    image?:ImageProps;
    subContent?:string
}

export default function Hero(){
    return(
        <div className="container flex items-center justify-center">
            <div className="container flex flex-col lg:flex-row gap-12 mt-[6rem] lg:mt-28 ">
       
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className=" text-3xl font-bold md:text-4 lg:text-4xl text-center lg:text-left mb-6">
            O QUE É TORA?
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            TORA se trata de uma ferramenta de 
            resolução de cálculos matemáticos complexos, que necessitam 
            de uma resolução extremamente elaborada e/ou extremamente precisa, como equação linear, modelos de redes, programação linear, entre outros tipos.
            </p>
           
          </div>
       
          <div className="flex justify-center flex-2">
            <img className=" w-[50rem] h-[40rem] object-cover" src="https://source.unsplash.com/random" alt="" />
          </div>
        </div>
      </div>
    )
}