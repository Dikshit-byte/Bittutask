import { FaPlay } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from 'react-loader-spinner';

export default function Card({ dish,description,image}) {
  return (
    <div className="md:w-[45rem] md:h-[20rem] w-[20.5rem] h-[40rem] p-12 rounded-2xl bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-800 flex flex-row ease-linear duration-300 md:flex-row-reverse my-2 mb-2">
      <div className=" h-full w-full shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>DISH</h1>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          {image? <Loader/> : <LazyLoadImage
            src={image}
            alt="dish"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
            style={{"filter":"invert(1) hue-rotate(180deg)"}}
          />}
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">{dish}</p>
        <h1 className="m-2 text-1.5xl font-bold text-black">
        {description}
        </h1>

        <div className="flex flex-row">
          <button className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
            <FaPlay className="animate-ping" size={10} color="#fff" />
            <h1 className="text-white text-md font-semibold pl-2">
              Click on it
            </h1>
          </button> 
        </div>
      </div>
    </div>
  );
}