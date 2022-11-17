export default function Cards(){
    return(

        <div className="mt-20 flex flex-col mb-2 justify-center items-center">
            
            <div className="text-4xl font-bold mb-9">
                Tutoriais
            </div>
            
        <div className="md:flex flex-row mb-9 gap-6 sm:flex-col-1 gap-7">
            
<a href="#" className="flex flex-col items-center bg-white border rounded-lg py-4 shadow-md md:flex-row md:max-w-xl hover:bg-gray-300 bg-green-100">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="../../img/student.png" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Conceitos de IPO</h5>
        <p className="mb-3 font-normal text-black">Entenda o que é IPO e sua importância.</p>
    </div>
</a>
<br/>
<a href="#" className="flex flex-col items-center bg-white border rounded-lg py-4 shadow-md md:flex-row md:max-w-xl hover:bg-gray-300 bg-green-100" >
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="../../img/engrenagem.png" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Conceitos de IPO</h5>
        <p className="mb-3 font-normal text-black">Entenda o que é IPO e sua importância.</p>
     
    </div>
</a>

</div>



        </div>
    )
}