export default function Jumbotron(){
    return(
        <div className="px-3 py-5 flex justify-center items-center h-[24rem] w-full max-h-[400px] bg-gradient-to-r from-blue-300 to-green-300 ">
        <div className="container flex lg:flex-row gap-12 mt-[5rem] ">
        <div className="flex flex-col  items-center text-center justify-center  mx-auto md:text-center ">
            <span className="lg:text-5xl font-bold text-white-300  md: text-4xl   sm: text-4xl  ">
            TORA é o melhor programa para <br/> aprender pesquisa operacional
        </span>
        <div className="flex items-center font text-lg text-center lg:text-left  lg:mt-[6rem] mb-4 md:mt-[4rem] sm: mt-[2rem]">
            
        <span className="flex w-min-[54px] justify-center h-[54px] w-[162px] font-bold rounded-md bg-black text-white-300"><a className="text-center flex items-center" href="https://drive.google.com/file/d/1S886nyhYj0gKq2Y-tfqanDxMwFpkdLgZ/view">Baixar</a></span>
        </div>
       
      </div>
    </div>
  </div>
    )

}