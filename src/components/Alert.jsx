import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function Alert({ value }) {
    const [alertState, setAlertState] = React.useState(false);
    if (value < 1) {
        setAlertState(true);
    }
    console.log(alertState);
    return (
        (alertState)?<></> : 
            <div>
                <div className="md:m-4 bg-[red] shadow-md shadow-[red] pr-1 rounded-xl flex-row justify-center items-center ease-linear duration-300 bottom-0 left-0 fixed flex flex-wrap">
                    {/* <span className="md:m-2 relative text-2xl rounded-xl flex flex-row ease-linear duration-300 cursor-pointer whitespace-normal">
                    </span> */}
                    <p className="text-white text-md font-semibold pl-2 text-1xl">
                        Sorry! You already gave rating to 3, so will not count anymore!!
                    </p>
                </div>
            </div>
    );
}

export default Alert;
