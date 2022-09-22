import React from "react";

function Alert() {
    return (
            <div>
                <div className="md:m-4 bg-[red] shadow-md shadow-[red] pr-3 pt-1 rounded-xl flex-row justify-center items-center ease-linear duration-300 bottom-0 fixed flex flex-wrap whitespace-normal font-roboto">
                    <p className="text-white text-md font-semibold pl-2 text-1xl relative translate">
                        Sorry! You already gave rating to 3, so will not count anymore!!
                    </p>
                </div>
            </div>
    );
}

export default Alert;
