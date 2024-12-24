import React from 'react'
import Image from 'next/image';


const Card4: React.FC = () => {
  return (
    <div className="flex justify-center mb-6 px-16">
      {/*  Image */}
      <Image
        src="/Share(1).png"
        alt="card"
        width={1799}
        height={780}
        className="object-contain"
      />
    </div>
  );
};

export default Card4;
























/*interface propstype{
    img:string;
   
    
}
const Card4:React.FC<propstype>= ({img}) => {
  return (
    
     <div className="sm:flex-row grid place-items-center  sm:pl-60 mb-10">


       
            <div className='w-100'><Image src={img} alt="card" width={1799} height={780} className='w-[1799px] h-[780px] bg-[#F5F5F5] ' /></div>
           
           
        </div>
      
    
  )
}

export default Card4;*/