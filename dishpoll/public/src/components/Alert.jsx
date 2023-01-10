import React from "react";

function Alert() {
    return (
            <div>
                <div className="md:m-4 bg-[red] shadow-md shadow-[red] pr-3 pt-1 rounded-xl flex-row justify-center items-center ease-linear duration-300 bottom-0 fixed right-0 flex flex-wrap whitespace-normal font-roboto z-20">
                    <p className="text-white text-md font-semibold pl-3 text-1xl relative translate z-20">
                        Sorry! You already gave rating to 3 cards, so will not count anymore!!
                    </p>
                </div>
            </div>
    );
}

export default Alert;
