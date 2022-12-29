


interface HeroProps{
    title?:string;
    content?:string;
    image?:string;
    animation?:string;
    className?:string;
}

export default function Hero(props:HeroProps){

  
  
    return(
        <div className="container flex items-center justify-center" data-aos={props.animation}>
            <div  className="container flex flex-col lg:flex-row gap-12 mt-[6rem] lg:mt-28">
       
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold md:text-4 lg:text-4xl text-center lg:text-left mb-6">
            {props.title}

            </h2>
            <p className=" text-bookmark-grey text-lg text-center lg:text-left mb-6">
            {props.content}
            </p>
           
          </div>
       
          <div className="flex justify-center flex-2">
            <img className=" w-[50rem] h-[30rem] object-contain" src={props.image} alt="" />
          </div>
        </div>
      </div>
    )
}