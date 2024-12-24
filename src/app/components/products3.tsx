
import Image from "next/image";


export const Hero3 = () => {
  return (
    <div className=" justify-center  ml-4 items-center ">
    <button className="w-40 p-2 ml-80 bg-white-800 font-bold border border-amber-600 text-2xl text-amber-600 rounded-lg">
      Show more
    </button>
  

    <div className="flex flex-col md:flex-row p-6 gap-6">
      
      <div className="flex flex-col md:flex-row items-center md:items-start bg-red-50">
      {/* <div className="w-full md:w-[217px] h-auto gap-4 ml-0 md:ml-[150px]"> */}
      <div className='mt-60 ml-28'>
        <h1 className='text-4xl font-bold '>50+ Beautiful Room</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem?</p>
        <button className=' w-40 bg-amber-600 font-bold text-white'>Explore more</button>
        </div>

       
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/bg2.png"
          alt="product"
          width={400}
          height={200}
          className="max-w-[400px] md:w-[696px] h-auto rounded-lg"
          />
        <Image
          src="/bg3.png"
          alt="product1"
          width={400}
          height={200}
          className=" md:w-[696px] h-auto rounded-lg"
        />
      </div>
    </div>
    </div>
  );
};
export default Hero3;



