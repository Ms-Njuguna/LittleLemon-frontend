import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    // to handle navigation to reservation page when user clicks reserve a table
    const navigate = useNavigate();
    const handleReserveTable = () => {navigate("/reservation")};

    return (
        <div className="relative bg-[rgb(73,94,87)] h-[400px] py-20"> {/* Removed 'overflow-hidden' */}
            {/* background lemon pattern */}
            <div className="absolute">
               <img src="src/assets/ui/bgPattern.png" alt="pattern" className="relative bottom-[80px] left-[170px] w-40 opacity-5"></img>
               <img src="src/assets/ui/bgPattern.png" alt="pattern" className="absolute top-30 left-[100px] w-40 opacity-5"></img>
               <img src="src/assets/ui/bgPattern.png" alt="pattern" className="absolute top-0 left-[1300px] w-40 opacity-10"></img>
               <img src="src/assets/ui/bgPattern.png" alt="pattern" className="absolute top-28 left-[1450px] w-40 opacity-5"></img>
            </div>

            {/* hero section content */}
            <div className="relative grid grid-cols-2 items-center max-w-[1000px] mx-auto my-[-25px] px-5 gap-[50px]"> {/* Changed to mx-auto px-5 */}
                <div>
                    <h2 className="font-markazi text-[40px] font-bold text-[#F4CE14]">Little Lemon</h2>
                    <h5 className="font-markazi text-[#EDEFEE] text-[24px] font-semibold mt-[-15px] pb-4">Nairobi</h5>
                    <p className="text-[18px] text-[#EDEFEE] pb-4 font-karla">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    <button onClick={handleReserveTable} className="bg-[#F4CE14] px-4 py-2 rounded-[16px] mt-4 font-bold text-[rgb(73,94,87)] font-karla">Reserve a table</button>
                </div>
                <div className="relative h-full"> {/* Made this container relative */}
                    <img src="src/assets/ui/restauranfood.jpg" alt="image of food" className="absolute my-[75px] right-[0px] top-1/2 -translate-y-1/2 h-[400px] w-[350px] rounded-[16px] object-cover"></img>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;