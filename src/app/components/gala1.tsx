import Image from 'next/image';



// Interface to define the structure of the image card data
interface CardData {
  imageSrc: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    imageSrc: "/dining.png",
    title: "Shooting Stars",
    description: "Modern and unique designs that shine like stars.",
  },
  {
    imageSrc: "/living.png",
    title: "The Catalyzer",
    description: "Furniture that acts as a catalyst for creative spaces.",
  },
  {
    imageSrc: "/bedroom.png",
    title: "The 400 Blows",
    description: "Bold and daring furniture to make a statement.",
  },
];

const Products: React.FC = () => {
  return (

<section className="text-gray-600 body-font bg-zinc-50  mb-2">
  <div className="container px-12 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden mb-12">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className=" sm:flex-row grid place-items-center  sm:pl-60 mb-10">
        <h1 className="sm:w-2/5 text-gray-900 font-bold  text-2xl mb-2 sm:mb-0   pl-50">
          Browse The Range
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base  inset-0  sm:pl-10  ">
          A celebration of unique and modern furniture designs
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-8">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center w-full h-[480px]"
            src="/dining.png"
            width={381} // Default width
            height={480} // Default height
            
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white">
           
          </div>
        </div>
        <div className="text-center">
              <p className="text-bold text-zinc-950 leading-relaxed mt-2">
                Dining
              </p>
            </div>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6" >
        <div className="relative rounded-lg overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center w-full h-[480px]"
            src="/living.png"
            width={381} // Default width
            height={480} // Default height
          />
          <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 text-white">
           
          </div>
        </div>
        <div className="grid place-items-center">
              <p className="text-bold text-zinc-950 leading-relaxed mt-2">
                Living
              </p>
            </div>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center w-full h-[480px]"
            src="/bedroom.png"
            width={381} // Default width
            height={480} // Default height
          />
          <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 text-white">
           
          </div>
        </div>
        <div className="text-center">
              <p className="text-bold text-zinc-950 leading-relaxed mt-2">
                Bedroom
              </p>
            </div>
      </div>
    </div>
  </div>
</section>

);
};

export default Products;














































