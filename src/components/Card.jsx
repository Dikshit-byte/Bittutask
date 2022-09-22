import { React, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../utils/Loader";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "./GlobalVariable";
import Alert from "./Alert";

export default function Card(props) {
  const countRef = useRef(3);
  const { image, dish, description } = props;
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState(null);
  // console.log(value);
  // console.log(countRef.current);

  // console.log(global.counter);
  setTimeout(() => {
    setLoad(false);
  }, 100);

  return (
    <div className="md:w-[45rem] md:h-[20rem] w-[20.5rem] h-[40rem] p-12 rounded-2xl bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-800 flex flex-row ease-linear duration-300 md:flex-row-reverse my-2 mb-2 ml-5">
      <div className=" h-full w-full shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2 rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>DISH</h1>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          {load ? (
            <Loader />
          ) : (
            <LazyLoadImage
              src={image}
              alt="dish"
              layout="fill"
              className=" rounded-2xl"
            />
          )}
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <h3 className="m-2 font-bold pl-1 text-lg text-[#5865F2] z-10">{dish}</h3>
        <h1 className="m-2 text-1.5xl font-bold text-black">{description}</h1>

        <div className="flex flex-row bottom-0.5">
          <div className="md:m-2 mb-0 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center ease-linear duration-300">
            <span className="text-white text-md font-semibold pl-2 ">
              Enter your rating from 1 to 3
            </span>
            <br />
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
              className="pt-1"
            >
              {global.counter && global.counter > 0 && (
                <Rating
                  name="simple-controlled"
                  value={value}
                  max={3}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    global.counter--;
                  }}
                  onClick={() => countRef.current--}
                  disabled={value ? true : false}
                />
              )}
            </Box>
            {!global.counter && <Alert/>}
          </div>
        </div>
      </div>
    </div>
  );
}
